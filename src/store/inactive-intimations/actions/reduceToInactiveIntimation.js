import { REDUCE_TO_INACTIVE_INTIMATION } from './types';

const reduceToInactiveIntimation = () => (dispatch, getState) => {

    const { employeeDetails, activeIntimations, inactiveIntimations } = getState();

    let filterRes = activeIntimations[1].filter(i => i.empId === employeeDetails.id);
    let loggedInUsersActiveIntimation = filterRes[0];

    const today = new Date();

    let datesFromPast =
        loggedInUsersActiveIntimation.requests
            .map(request => new Date(request.date))
            .filter(dt => dt < today || (new Date(dt).getTime() === today.getTime() && today.getHours >= 17));

    if (datesFromPast.length > 0) {
        dispatch({
            type: REDUCE_TO_INACTIVE_INTIMATION,
            payload: [
                ...inactiveIntimations,
                {
                    "id": loggedInUsersActiveIntimation.id,
                    "empId": loggedInUsersActiveIntimation.empId,
                    "reason": loggedInUsersActiveIntimation.reason,
                    "requests": datesFromPast
                }
            ]
        });
    }
};

export default reduceToInactiveIntimation;
