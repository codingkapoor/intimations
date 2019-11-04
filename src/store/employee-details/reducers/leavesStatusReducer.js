import { FETCH_EMPLOYEE_DETAILS } from '../actions/types';

const leavesStatusReducer = (employeeDetails = {}, { type, payload }) => {
    if (type === FETCH_EMPLOYEE_DETAILS)
        return payload;

    return employeeDetails;
}

export default leavesStatusReducer;
