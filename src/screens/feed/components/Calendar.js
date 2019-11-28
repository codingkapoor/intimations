import React from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default ({ holidaysRef, activeIntimation }) => {

    let requestDates = activeIntimation.requests.sort((a, b) => { return new Date(a.date) - new Date(b.date) });
    let firstRequest = requestDates[0];
    let lastRequest = requestDates[requestDates.length - 1];

    let firstRequestDate = new Date(firstRequest.date);
    let firstMonth = firstRequestDate.getMonth() + 1;
    let firstYear = firstRequestDate.getFullYear();

    let lastRequestDate = new Date(lastRequest.date);
    let lastMonth = lastRequestDate.getMonth() + 1;
    let lastYear = lastRequestDate.getFullYear();

    const onMonthChange = e => {
        if (e.year >= firstYear && e.year <= lastYear && e.month >= firstMonth && e.month <= lastMonth) {
            // console.log('e.year >= firstYear && e.year <= lastYear && e.month >= firstMonth && e.month <= lastMonth');
            // console.log(`year: ${e.year}, firstYear: ${firstYear}, lastYear: ${lastYear}, month: ${e.month}, firstMonth: ${firstMonth}, lastMonth: ${lastMonth}`);
            holidaysRef.current.updateMonthYear(e.month, e.year, true);
        }
        else {
            // console.log('!(e.year >= firstYear && e.year <= lastYear && e.month >= firstMonth && e.month <= lastMonth)');
            // console.log(`year: ${e.year}, firstYear: ${firstYear}, lastYear: ${lastYear}, month: ${e.month}, firstMonth: ${firstMonth}, lastMonth: ${lastMonth}`);
            holidaysRef.current.updateMonthYear(e.month, e.year, false);
        }
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
