import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const CalendarTheme = {
    calendarBackground: '#FBFBFB',
    textDayFontFamily: 'open-sans-light',
    textMonthFontFamily: 'montserrat-bold',
    textDayHeaderFontFamily: 'montserrat-light',
    'stylesheet.day.multiDot': {
        today: {
            borderRadius: 50,
            backgroundColor: '#F4F7FA'
        },
        todayText: {
            color: '#3A8BCF'
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
};

export default Styles = StyleSheet.create({
    calendar: {
        width: wp('90%'),
        borderRadius: 10,
        paddingBottom: 15,
        marginTop: 15
    }
});
