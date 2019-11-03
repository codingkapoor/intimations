import { FETCH_EMPLOYEE_DETAILS } from '../actionTypes';

const leavesStatusReducer = (employeeDetails = {}, { type, payload }) => {
    if (type === FETCH_EMPLOYEE_DETAILS)
        return payload;

    return employeeDetails;
}

export default leavesStatusReducer;
