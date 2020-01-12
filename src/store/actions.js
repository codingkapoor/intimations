
import { fetchActiveIntimations } from './active-intimations/actions';
import { fetchHolidays } from './holidays/actions';
import { fetchEmployeeDetails } from './employee-details/actions';
import checkoutFromActiveIntimation from './stage-intimation/actions/checkoutFromActiveIntimation';
import { getDaysInMonthYear } from '../common/utils/dates';

export const fetchAll = () => async dispatch => {
    await dispatch(fetchEmployeeDetails(128));

    const getStartMonth = month => String(month - 6 <= 0 ? month + 6 : month - 6).padStart(2, '0');
    const getStartYear = (month, year) => month - 6 <= 0 ? year - 1 : year;

    const getEndMonth = month => String(month).padStart(2, '0');

    const getStart = (month, year) => `${getStartYear(month, year)}-${getStartMonth(month)}-01`;
    const getEnd = (month, year) => `${year}-${getEndMonth(month)}-${getDaysInMonthYear(month, year)}`;

    const limit = (month, year) => [getStart(month, year), getEnd(month, year)];

    var now = new Date();
    const [start, end] = limit(now.getMonth() + 1, now.getFullYear());

    await dispatch(fetchHolidays(start, end));
    await dispatch(fetchActiveIntimations());
    await dispatch(checkoutFromActiveIntimation());
};
