
import { fetchActiveIntimations } from './active-intimations/actions';
import { fetchHolidays } from './holidays/actions';
import { fetchEmployeeDetails } from './employee-details/actions';

export const fetchAll = () => async dispatch => {
    fetchEmployeeDetails(11)(dispatch);
    fetchHolidays()(dispatch);
    fetchActiveIntimations()(dispatch);
};
