import _ from 'lodash';

import { FETCH_HOLIDAYS } from './types';
import { WEEK_NAMES } from '../../../common/utils/dates';
import { platform } from '../../../common/apis';
import { getAccessToken } from '../../../common/utils/auth';

const _remodelHolidays = holidays => {
    let _holidays = {};

    const transform = (holiday) => {
        const dt = new Date(holiday.date);
        const date = dt.getDate();
        const day = dt.getDay();
        const month = String(dt.getMonth() + 1).padStart(2, "0");
        const year = dt.getFullYear();
        const occasion = holiday.occasion;

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
    const access = await getAccessToken();
    const res = await platform.get('/holidays?start=2020-01-01&end=2020-12-31', { headers: { Authorization: "Bearer " + access } });
    const holidays = res.data;
    const payload = [_remodelHolidays(holidays), holidays];

    dispatch({
        type: FETCH_HOLIDAYS,
        payload
    });
};

export default fetchHolidays;
