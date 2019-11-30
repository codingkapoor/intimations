import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'react-native-calendars';
import { Vibration } from 'react-native';

import HolidaysContainer from '../../../../common/components/holidays/HolidaysContainer';
import Toasts, { CREATE, ALREADY5, WEEKENDS } from './Toasts';
import { _getDatesMarkedAsHolidays, _getDatesMarkedAsRequests } from '../../../../common/utils/calendar';
import Styles from '../../Styles';

export default ({ inactiveRequests, holidays, stageRequests, toggleValue }) => {

    const [markedDates, setMarkedDates] = useState({});

    const [showToast, setShowToast] = useState(null);
    const [visible, setVisible] = useState(false);
    const setToastVisibility = () => {
        setTimeout(() => setVisible(true), 500);
        setTimeout(() => setVisible(false), 5000);
    }

    const [incompleteRequests, setIncompleteRequests] = useState([]);

    const holidaysRef = useRef();
    const updateHolidaysMonthYear = (month, year, show) => {
        holidaysRef.current.updateMonthYear(month, year, show);
    }

    let currentDate = new Date(new Date().toISOString().split('T')[0]);

    let firstMonth = currentDate.getMonth() + 1;
    let firstYear = currentDate.getFullYear();

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
    }, []);

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
        }

        // if (incompleteRequests.filter(i => i === datePressed).length > 0) {

        // }
    }

    const onDayLongPress = day => {
        Vibration.vibrate();
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
