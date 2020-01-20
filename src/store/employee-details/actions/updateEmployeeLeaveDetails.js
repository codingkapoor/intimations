import { UPDATE_EMPLOYEE_LEAVE_DETAILS } from './types';

const updateEmployeeLeaveDetails = leaves => (dispatch, getState) => {
    const { employeeDetails } = getState();

    dispatch({
        type: UPDATE_EMPLOYEE_LEAVE_DETAILS,
        payload: { ...employeeDetails, leaves }
    });
};

export default updateEmployeeLeaveDetails;
