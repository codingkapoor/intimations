
import { fetchActiveIntimations } from './active-intimations/actions';
import { fetchHolidays } from './holidays/actions';
import { fetchEmployeeDetails } from './employee-details/actions';

export const fetchAll = () => async dispatch => {
    await dispatch(fetchEmployeeDetails(11));
    await dispatch(fetchHolidays());
    await dispatch(fetchActiveIntimations());
};
