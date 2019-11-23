import _ from 'lodash';
import axios from 'axios';
import { FETCH_HOLIDAYS } from './types';

const fetchHolidays = () => async dispatch => {
    const holidays = await axios.get('https://api.myjson.com/bins/jlx56');

    dispatch({
        type: FETCH_HOLIDAYS,
        payload: holidays.data
    });
};

export default fetchHolidays;
