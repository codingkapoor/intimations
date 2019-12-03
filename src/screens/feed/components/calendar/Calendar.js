import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'react-native-calendars';

import HolidaysContainer from '../../../../common/components/holidays/HolidaysContainer';
import { _getDatesMarkedAsHolidays, _getDatesMarkedAsRequests } from '../../../../common/utils/calendar';
import Styles from '../../Styles';

export default ({ requests, holidays }) => {

    const [markedDates, setMarkedDates] = useState({});

    const holidaysRef = useRef();
    const updateHolidaysMonthYear = (month, year, show) => {
        holidaysRef.current.updateMonthYear(month, year, show);
    }

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
                style={Styles.calendar}
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
