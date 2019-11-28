import _ from 'lodash';
import axios from 'axios';
import { FETCH_HOLIDAYS } from './types';
import { WEEK_NAMES } from '../../../common/utils/dates';

const _remodelHolidays = holidays => {
    let _holidays = {};

    const transform = (holiday) => {
        let dt = new Date(holiday.date)
        let date = dt.getDate()
        let day = dt.getDay()
        let month = dt.getMonth() + 1
        let year = dt.getFullYear()
        let occasion = holiday.occasion;

        let v = {};
        v['Day'] = WEEK_NAMES[day];
        v['Date'] = `${date.toString().padStart(2, "0")}`;
        v['Occasion'] = occasion;

        if (_holidays[year]) {
            if (_holidays[year][month])
                _holidays[year][month].push(v);
            else
                _holidays[year][month] = [v];
        } else {
            _holidays[year] = {};
            _holidays[year][month] = [v];
        }
    }

    holidays.map(holiday => transform(holiday));

    return _holidays;
}

const fetchHolidays = () => async dispatch => {
    const res = await axios.get('https://api.myjson.com/bins/1en0qa');

    let holidays = res.data;
    let payload = [_remodelHolidays(holidays), holidays];

    dispatch({
        type: FETCH_HOLIDAYS,
        payload
    });
};

export default fetchHolidays;
