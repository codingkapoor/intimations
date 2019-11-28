import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import HolidaysContainer from '../../../../common/components/holidays/HolidaysContainer';
import { BadgeColor } from '../../../../common/Constants';

export default ({ requests, holidays }) => {

    const holidaysRef = useRef();

    const updateHolidaysMonthYear = (month, year, show) => {
        holidaysRef.current.updateMonthYear(month, year, show);
    }

    const [markedDates, setMarkedDates] = useState({});

    let requestDates = requests.sort((a, b) => { return new Date(a.date) - new Date(b.date) });

    let firstRequest = requestDates[0];
    let firstRequestDate = new Date(firstRequest.date);
    let firstMonth = firstRequestDate.getMonth() + 1;
    let firstYear = firstRequestDate.getFullYear();

    let lastRequest = requestDates[requestDates.length - 1];
    let lastRequestDate = new Date(lastRequest.date);
    let lastMonth = lastRequestDate.getMonth() + 1;
    let lastYear = lastRequestDate.getFullYear();

    useEffect(() => {
        setMarkedDates({
            ..._getDatesMarkedAsHolidays(holidays, firstMonth, firstYear),
            ..._getDatesMarkedAsRequests(requests, firstMonth, firstYear)
        });

        updateHolidaysMonthYear(firstMonth, firstYear, true);
    }, []);

    const onMonthChange = e => {
        let month = e.month;
        let year = e.year;

        let _markedDates = {};

        if (year >= firstYear && year <= lastYear && month >= firstMonth && month <= lastMonth) {
            _markedDates = { ..._markedDates, ..._getDatesMarkedAsHolidays(holidays, month, year) }
            updateHolidaysMonthYear(month, year, true);
        }
        else
            updateHolidaysMonthYear(month, year, false);

        setMarkedDates({
            ..._markedDates,
            ..._getDatesMarkedAsRequests(requests, month, year)
        });
    }

    return (
        <>
            <Calendar
                current={Object.keys(markedDates).sort((a, b) => { return new Date(a.date) - new Date(b.date) })[0]}
                style={styles.calendar}
                onMonthChange={onMonthChange}
                markedDates={markedDates}
                markingType={'multi-dot'}
                theme={{
                    'stylesheet.day.multiDot': {
                        dot: {
                            width: 8,
                            height: 8,
                            marginTop: 1,
                            marginLeft: 1,
                            marginRight: 1,
                            borderRadius: 2,
                            opacity: 0
                        }
                    }
                }}
            />
            <HolidaysContainer ref={holidaysRef} />
        </>
    );
}

const styles = StyleSheet.create({
    calendar: {
        width: 370,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#D8DADA',
        borderRadius: 10,
        paddingBottom: 15
    }
});

const _getDatesMarkedAsHolidays = (holidays, month, year) => {
    let _markedDates = {};

    if (holidays && holidays[0][year] && holidays[0][year][month]) {
        let data = holidays[0][year][month];
        data.forEach(holiday =>
            _markedDates[`${year}-${month}-${holiday.Date}`] = {
                dots: [{ color: '#E5B001', borderColor: '#E5B001' }]
            }
        );
    }

    return _markedDates;
}

const _getDatesMarkedAsRequests = (requests, month, year) => {
    const _filterByMonthYear = (request, month, year) => {
        let dt = new Date(request.date);
        return dt.getMonth() + 1 === month && dt.getFullYear() === year;
    }

    let _markedDates = {};

    requests.filter(request => _filterByMonthYear(request, month, year)).forEach(request =>
        _markedDates[request.date] = {
            dots: [
                { color: BadgeColor[request.firstHalf], borderColor: BadgeColor[request.firstHalf] },
                { color: BadgeColor[request.secondHalf], borderColor: BadgeColor[request.secondHalf] }
            ]
        }
    );

    return _markedDates;
}
