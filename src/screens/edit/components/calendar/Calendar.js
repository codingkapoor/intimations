import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'react-native-calendars';
import { Vibration } from 'react-native';

import HolidaysContainer from '../../../../common/components/holidays/HolidaysContainer';
import Toasts, { PAST, ALREADY5, WEEKENDS, INCOMPLETE_REQUEST } from '../Toasts';
import { _getDatesMarkedAsHolidays, _getDatesMarkedAsRequests } from '../../../../common/utils/calendar';
import Styles from './Styles';
import { getDiffInMonths, getDaysInMonthYear } from '../../../../common/utils/dates';

export default ({ inactiveRequests, holidays, activeIntimation, stageIntimation, updateStageIntimation,
    toggleValue, stageIntimationIncompleteRequest, setStageIntimationIncompleteRequest, fetchInactiveIntimations }) => {

    const [markedDates, setMarkedDates] = useState({});

    const [showToast, setShowToast] = useState(null);
    const [visible, setVisible] = useState(false);
    const setToastVisibility = () => {
        setTimeout(() => setVisible(true), 500);
        setTimeout(() => setVisible(false), 5000);
    }

    const holidaysRef = useRef();
    const updateHolidaysMonthYear = (month, year, show) => {
        holidaysRef.current.updateMonthYear(month, year, show);
    }

    let currentDate = new Date(new Date().toISOString().split('T')[0]);

    let firstMonth = currentDate.getMonth() + 1;
    let firstYear = currentDate.getFullYear();

    stageReason = stageIntimation.reason;
    stageRequests = stageIntimation.requests;

    if (stageRequests.length > 0) {
        let requestDates = stageRequests.sort((a, b) => { return new Date(a.date) - new Date(b.date) });

        let firstRequest = requestDates[0];
        let firstRequestDate = new Date(firstRequest.date);

        firstMonth = firstRequestDate.getMonth() + 1;
        firstYear = firstRequestDate.getFullYear();
    }

    useEffect(() => {
        setMarkedDates({
            ..._getDatesMarkedAsHolidays(holidays, firstMonth, firstYear),
            ..._getDatesMarkedAsRequests(inactiveRequests, firstMonth, firstYear),
            ..._getDatesMarkedAsRequests(stageRequests, firstMonth, firstYear)
        });

        updateHolidaysMonthYear(firstMonth, firstYear, true);
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
                console.log('navPoint: ', navPoint, ', endPoint: ', endPoint);

                let [start, end] = limit(navPoint.getMonth() + 1, navPoint.getFullYear());
                console.log('start: ', start, ', end: ', end);

                fetchInactiveIntimations(start, end);
            }
        }
    }

    const _onMonthChange = e => {
        let month = e.month;
        let year = e.year;

        _fetchInactiveIntimations(month, year);

        updateHolidaysMonthYear(month, year, true);

        setMarkedDates({
            ..._getDatesMarkedAsHolidays(holidays, month, year),
            ..._getDatesMarkedAsRequests(inactiveRequests, month, year),
            ..._getDatesMarkedAsRequests(stageRequests, month, year)
        });
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

        if (datePressed.getDay() === 0 || datePressed.getDay() === 6) {
            setShowToast(WEEKENDS);
            setToastVisibility();
        } else if (datePressed < currentDate) {
            setShowToast(PAST);
            setToastVisibility();
        } else if (datePressed === currentDate && currentDate.getHours() >= 17) {
            setShowToast(ALREADY5);
            setToastVisibility();
        } else {
            if (stageIntimationIncompleteRequest.date) {
                if (e.dateString !== stageIntimationIncompleteRequest.date) {
                    setShowToast(INCOMPLETE_REQUEST);
                    setToastVisibility();
                } else {
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
        if (stageIntimationIncompleteRequest.date && e.dateString !== stageIntimationIncompleteRequest.date) {
            setShowToast(INCOMPLETE_REQUEST);
            setToastVisibility();
        } else if (stageRequests.filter(r => r.date === e.dateString).length > 0) {
            Vibration.vibrate();
            _removeFromStageIntimationRequests(e.dateString);
            setStageIntimationIncompleteRequest({});
        }
    }

    return (
        <>
            <Calendar
                current={Object.keys(markedDates).sort((a, b) => { return new Date(a.date) - new Date(b.date) })[0]}
                style={Styles.calendar}
                markedDates={markedDates}
                onMonthChange={_onMonthChange}
                onDayPress={_onDayPress}
                onDayLongPress={_onDayLongPress}
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

            <Toasts showToast={showToast} visible={visible} />
        </>
    );
}
