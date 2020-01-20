import { FETCH_EMPLOYEE_DETAILS, UPDATE_EMPLOYEE_LEAVE_DETAILS } from '../actions/types';

const employeeDetailsReducer = (employeeDetails = {}, { type, payload }) => {
    if (type === FETCH_EMPLOYEE_DETAILS)
        return payload;

    if (type === UPDATE_EMPLOYEE_LEAVE_DETAILS)
        return payload;

    return employeeDetails;
}

export default employeeDetailsReducer;
