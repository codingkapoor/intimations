import React from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default ({ holidaysRef, activeIntimation }) => {
    let currentMonth = activeIntimation.requests.sort((a, b) => { return new Date(a.date) - new Date(b.date) })[0];

    return (
        <Calendar
            current={currentMonth.date}
            style={styles.calendar}
            onMonthChange={e => holidaysRef.current.updateMonthYear(e.month, e.year)}
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
            onPressArrowLeft={substractMonth => substractMonth()}
            onPressArrowRight={addMonth => addMonth()}
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
