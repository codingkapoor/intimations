import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet } from 'react-native';

import HolidaysContainer from '../../../../common/components/holidays/HolidaysContainer';

export default ({ holidays }) => {

    const holidaysRef = useRef();

    const updateHolidaysMonthYear = (month, year, show) => {
        holidaysRef.current.updateMonthYear(month, year, show);
    }

    const [markedDates, setMarkedDates] = useState({});

    return (
        <>
            <Calendar
                current={'2019-12-01'}
                style={styles.calendar}
                hideExtraDays={true}
                markedDates={{
                    '2019-11-01': { marked: true, disabled: true, disableTouchEvent: true }
                }}
            />

            <HolidaysContainer ref={holidaysRef} />
        </>
    );
}

const styles = StyleSheet.create({
    calendar: {
        width: 370,
        borderWidth: 1,
        borderColor: '#D8DADA',
        borderRadius: 10,
        paddingBottom: 15,
        marginTop: 15
    }
});
