import platform from '../../../common/apis/platform';
import { FETCH_EMPLOYEE_DETAILS } from './types';

const fetchEmployeeDetails = id => async dispatch => {
    const res = await platform.get(`/employees/${id}`);
    const employeeDetails = res.data;

    dispatch({
        type: FETCH_EMPLOYEE_DETAILS,
        payload: employeeDetails
    });
};

export default fetchEmployeeDetails;
