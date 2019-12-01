import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'react-native-calendars';
import { Vibration } from 'react-native';

import HolidaysContainer from '../../../../common/components/holidays/HolidaysContainer';
import Toasts, { CREATE, ALREADY5, WEEKENDS, INCOMPLETE_REQUEST } from './Toasts';
import { _getDatesMarkedAsHolidays, _getDatesMarkedAsRequests } from '../../../../common/utils/calendar';
import Styles from '../../Styles';

export default ({ inactiveRequests, holidays, stageIntimation, updateStageIntimation, toggleValue }) => {
    console.log(stageIntimation);

    const [markedDates, setMarkedDates] = useState({});

    const [showToast, setShowToast] = useState(null);
    const [visible, setVisible] = useState(false);
    const setToastVisibility = () => {
        setTimeout(() => setVisible(true), 500);
        setTimeout(() => setVisible(false), 5000);
    }

    const [incompleteRequest, setIncompleteRequest] = useState({});

    const holidaysRef = useRef();
    const updateHolidaysMonthYear = (month, year, show) => {
        holidaysRef.current.updateMonthYear(month, year, show);
    }

    let currentDate = new Date(new Date().toISOString().split('T')[0]);

    let firstMonth = currentDate.getMonth() + 1;
    let firstYear = currentDate.getFullYear();

    stageReason = stageIntimation.reason ? stageIntimation.reason : '';
    stageRequests = stageIntimation.requests ? stageIntimation.requests : [];

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
    }, [stageIntimation]);

    const onMonthChange = e => {
        let month = e.month;
        let year = e.year;

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

    const onDayPress = e => {
        let datePressed = new Date(e.dateString);

        if (datePressed.getDay() === 0 || datePressed.getDay() === 6) {
            setShowToast(WEEKENDS);
            setToastVisibility();
        } else if (datePressed < currentDate) {
            setShowToast(CREATE);
            setToastVisibility();
        } else if (datePressed === currentDate && currentDate.getHours() >= 17) {
            setShowToast(ALREADY5);
            setToastVisibility();
        } else {
            if (incompleteRequest.date) {
                if (e.dateString !== incompleteRequest.date) {
                    setShowToast(INCOMPLETE_REQUEST);
                    setToastVisibility();
                } else {
                    let req = { 'date': incompleteRequest.date, 'firstHalf': incompleteRequest.firstHalf, 'secondHalf': toggleValue };
                    let requests = stageRequests.filter(i => i.date !== e.dateString);
                    requests.push(req);

                    _updateStageIntimation(stageReason, requests);

                    setIncompleteRequest({});

                    if (incompleteRequest.firstHalf === 'WFO' && toggleValue === 'WFO')
                        setTimeout(() => { _removeFromStageIntimationRequests(e.dateString) }, 500);
                }
            } else {
                let req = { 'date': e.dateString, 'firstHalf': toggleValue, 'secondHalf': 'None' };
                let requests = stageRequests.filter(i => i.date !== e.dateString);
                requests.push(req);

                _updateStageIntimation(stageReason, requests);
                
                setIncompleteRequest(req);
            }
        }
    }

    const onDayLongPress = e => {
        if (stageRequests.filter(r => r.date === e.dateString).length > 0) {
            Vibration.vibrate();
            _removeFromStageIntimationRequests(e.dateString);
        }
    }

    return (
        <>
            <Calendar
                current={Object.keys(markedDates).sort((a, b) => { return new Date(a.date) - new Date(b.date) })[0]}
                style={Styles.calendar}
                markedDates={markedDates}
                onMonthChange={onMonthChange}
                onDayPress={onDayPress}
                onDayLongPress={onDayLongPress}
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
