
import { fetchActiveIntimations } from './active-intimations/actions';
import { fetchHolidays } from './holidays/actions';
import { fetchEmployeeDetails } from './employee-details/actions';
import checkoutFromActiveIntimation from './stage-intimation/actions/checkoutFromActiveIntimation';

export const fetchAll = () => async dispatch => {
    await dispatch(fetchEmployeeDetails(128));
    await dispatch(fetchHolidays());
    await dispatch(fetchActiveIntimations());
    await dispatch(checkoutFromActiveIntimation());
};
