import { AsyncStorage } from 'react-native';
import * as Font from 'expo-font';

import { fetchActiveIntimations } from './active-intimations/actions';
import { fetchHolidays } from './holidays/actions';
import { fetchEmployeeDetails } from './employee-details/actions';
import checkoutFromActiveIntimation from './stage-intimation/actions/checkoutFromActiveIntimation';
import { getDaysInMonthYear } from '../common/utils/dates';

export const fetchAll = () => async dispatch => {
    const profile = await AsyncStorage.getItem('profile');
    await dispatch(fetchEmployeeDetails(profile));

    const getStartMonth = month => String(month - 6 <= 0 ? month + 6 : month - 6).padStart(2, '0');
    const getStartYear = (month, year) => month - 6 <= 0 ? year - 1 : year;

    const getEndMonth = month => String(month + 6 > 12 ? month - 6 : month + 6).padStart(2, '0');

    const getStart = (month, year) => `${getStartYear(month, year)}-${getStartMonth(month)}-01`;
    const getEnd = (month, year) => `${year}-${getEndMonth(month)}-${getDaysInMonthYear(getEndMonth(month), year)}`;

    const limit = (month, year) => [getStart(month, year), getEnd(month, year)];

    var now = new Date();
    const [start, end] = limit(now.getMonth() + 1, now.getFullYear());

    await dispatch(fetchHolidays(start, end));
    await dispatch(fetchActiveIntimations());
    await dispatch(checkoutFromActiveIntimation());
};

export const loadAllFonts = async () => {
    await Font.loadAsync({
        'open-sans-light': require('../../assets/fonts/OpenSans-Light.ttf'),
        'open-sans-regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
        'quick-sand-light': require('../../assets/fonts/Quicksand-Light.ttf'),
        'montserrat-bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'montserrat-light': require('../../assets/fonts/Montserrat-Light.ttf'),
        'montserrat-regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'merri-weather-bold': require('../../assets/fonts/Merriweather-Bold.ttf'),
        'merri-weather-light': require('../../assets/fonts/Merriweather-Light.ttf')
    });
};
