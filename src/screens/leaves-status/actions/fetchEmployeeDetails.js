import platform from '../../../common/apis/platform';
import { FETCH_EMPLOYEE_DETAILS } from '../actionTypes';

const fetchEmployeeDetails = id => async dispatch => {
    const employeeDetails = await platform.get(`/employees/${id}`).data;

    dispatch({
        type: FETCH_EMPLOYEE_DETAILS,
        payload: employeeDetails
    });
};

export default fetchEmployeeDetails;
