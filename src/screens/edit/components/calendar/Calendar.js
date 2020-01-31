import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'react-native-calendars';
import { Vibration } from 'react-native';

import HolidaysContainer from '../../../../common/components/holidays/HolidaysContainer';
import { PAST, ALREADY5, WEEKENDS, INCOMPLETE_REQUEST } from '../../../../common/components/Toasts';
import { _getDatesMarkedAsHolidays, _getDatesMarkedAsRequests } from '../../../../common/utils/calendar';
import Styles from './Styles';
import { getDiffInMonths, getDaysInMonthYear } from '../../../../common/utils/dates';
import DetailsListContainer from '../details/DetailsListContainer';

export default ({ inactiveRequests, holidays, activeIntimation, stageIntimation, updateStageIntimation,
    toggleValue, stageIntimationIncompleteRequest, setStageIntimationIncompleteRequest, fetchInactiveIntimations, setToast }) => {

    let currentDate = new Date(new Date().toISOString().split('T')[0]);

    const [[month, year], setMonthYear] = useState([currentDate.getMonth() + 1, currentDate.getFullYear()]);

    const [markedDates, setMarkedDates] = useState({});

    const holidaysRef = useRef();
    const updateHolidaysMonthYear = (month, year, show) =>
        holidaysRef.current.updateMonthYear(month, year, show);

    const detailsListRef = useRef();
    const inactiveRequestDateSelected = inactiveRequestDate =>
        detailsListRef.current.inactiveRequestDateSelected(inactiveRequestDate);

    stageReason = stageIntimation.reason;
    stageRequests = stageIntimation.requests;

    useEffect(() => {
        if (stageRequests.length > 0) {
            let requestDates = stageRequests.sort((a, b) => { return new Date(a.date) - new Date(b.date) });
            let firstRequest = requestDates[0];
            let firstRequestDate = new Date(firstRequest.date);

            setMonthYear([firstRequestDate.getMonth() + 1, firstRequestDate.getFullYear()]);
        }
    }, []);

    useEffect(() => {
        setMarkedDates({
            ..._getDatesMarkedAsHolidays(holidays, month, year),
            ..._getDatesMarkedAsRequests(inactiveRequests, month, year),
            ..._getDatesMarkedAsRequests(stageRequests, month, year)
        });

        updateHolidaysMonthYear(month, year, true);
    }, [stageIntimation, inactiveRequests]);

    const _fetchInactiveIntimations = (month, year) => {
        const getStartMonth = month => String(month - 2 <= 0 ? month + 10 : month - 2).padStart(2, '0');
        const getStartYear = (month, year) => month - 2 <= 0 ? year - 1 : year;

        const getEndMonth = month => String(month).padStart(2, '0');

        const getStart = (month, year) => `${getStartYear(month, year)}-${getStartMonth(month)}-01`;
        const getEnd = (month, year) => `${year}-${getEndMonth(month)}-${getDaysInMonthYear(month, year)}`;

        const limit = (month, year) => [getStart(month, year), getEnd(month, year)];

        const currentDate = new Date();

        let navPoint = new Date(`${year}-${month}-01`);
        let endPoint = currentDate;

        if (activeIntimation.reason !== '') {
            let requestDates = activeIntimation.requests.sort((a, b) => { return new Date(a.date) - new Date(b.date) });
            let lastRequestDate = new Date(requestDates[requestDates.length - 1].date);
            endPoint = lastRequestDate;
        }

        if (navPoint < endPoint) {
            if ((getDiffInMonths(navPoint, endPoint) + 1) % 3 == 1) {
                let [start, end] = limit(navPoint.getMonth() + 1, navPoint.getFullYear());
                fetchInactiveIntimations(start, end);
            }
        }
    }

    const _onMonthChange = e => {
        let month = e.month;
        let year = e.year;

        _fetchInactiveIntimations(month, year);

        setMarkedDates({
            ..._getDatesMarkedAsHolidays(holidays, month, year),
            ..._getDatesMarkedAsRequests(inactiveRequests, month, year),
            ..._getDatesMarkedAsRequests(stageRequests, month, year)
        });

        updateHolidaysMonthYear(month, year, true);

        setMonthYear([month, year]);
    }

    const _updateStageIntimation = (stageReason, requests) => {
        updateStageIntimation({
            'reason': stageReason,
            'requests': requests
        });
    }

    const _removeFromStageIntimationRequests = datePressed => {
        let requests = stageRequests.filter(i => i.date !== datePressed);
        _updateStageIntimation(stageReason, requests);
    }

    const _onDayPress = e => {
        let datePressed = new Date(e.dateString);

        if (datePressed.getDay() === 0 || datePressed.getDay() === 6)
            setToast(WEEKENDS, 100, 3000);
        else if (datePressed < currentDate)
            setToast(PAST, 100, 3000);
        else if (datePressed === currentDate && currentDate.getHours() >= 17)
            setToast(ALREADY5, 100, 3000);
        else {
            if (stageIntimationIncompleteRequest.date) {
                if (e.dateString !== stageIntimationIncompleteRequest.date)
                    setToast(INCOMPLETE_REQUEST, 100, 3000);
                else {
                    let req = { 'date': stageIntimationIncompleteRequest.date, 'firstHalf': stageIntimationIncompleteRequest.firstHalf, 'secondHalf': toggleValue };
                    let requests = stageRequests.filter(i => i.date !== e.dateString);
                    requests.push(req);

                    if (stageIntimationIncompleteRequest.firstHalf === 'WFO' && toggleValue === 'WFO')
                        setTimeout(() => { _removeFromStageIntimationRequests(e.dateString) }, 500);

                    _updateStageIntimation(stageReason, requests);

                    setStageIntimationIncompleteRequest({});
                }
            } else {
                let req = { 'date': e.dateString, 'firstHalf': toggleValue, 'secondHalf': 'None' };
                let requests = stageRequests.filter(i => i.date !== e.dateString);
                requests.push(req);

                _updateStageIntimation(stageReason, requests);

                setStageIntimationIncompleteRequest(req);
            }
        }
    }

    const _onDayLongPress = e => {
        if (stageIntimationIncompleteRequest.date && e.dateString !== stageIntimationIncompleteRequest.date)
            setToast(INCOMPLETE_REQUEST, 100, 3000);
        else if (stageRequests.filter(r => r.date === e.dateString).length > 0) {
            Vibration.vibrate();
            _removeFromStageIntimationRequests(e.dateString);
            setStageIntimationIncompleteRequest({});
        } else {
            const selected = inactiveRequests.filter(ir => ir.date === e.dateString);
            if (selected.length > 0)
                inactiveRequestDateSelected(selected[0].date);
        }
    }

    return (
        <>
            <Calendar
                current={`${year}-${String(month).padStart(2, '0')}-01`}
                style={Styles.calendar}
                markedDates={markedDates}
                onMonthChange={_onMonthChange}
                onDayPress={_onDayPress}
                onDayLongPress={_onDayLongPress}
                markingType={'multi-dot'}
                theme={{
                    'stylesheet.day.multiDot': {
                        today: {
                            borderRadius: 50,
                            backgroundColor: '#D0E1EC'
                        },
                        todayText: {
                            color: '#FFFFFF'
                        },
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

            <DetailsListContainer ref={detailsListRef} />

            <HolidaysContainer ref={holidaysRef} />
        </>
    );
}
