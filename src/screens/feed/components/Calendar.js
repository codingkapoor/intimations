import React from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default ({ holidaysRef, activeIntimation }) => {

    let requestDates = activeIntimation.requests.sort((a, b) => { return new Date(a.date) - new Date(b.date) });
    let firstRequest = requestDates[0];

    const onMonthChange = e => {
        holidaysRef.current.updateMonthYear(e.month, e.year);
    }

    return (
        <Calendar
            current={firstRequest.date}
            style={styles.calendar}
            onMonthChange={onMonthChange}
            markedDates={activeIntimation.markedDates}
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
            hideExtraDays={true}
        />
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
