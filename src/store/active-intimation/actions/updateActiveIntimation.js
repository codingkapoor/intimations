import _ from 'lodash';

import { UPDATE_ACTIVE_INTIMATION } from './types';
import updateActiveIntimations from '../../active-intimations/actions/updateActiveIntimations';

const updateActiveIntimation = activeIntimation => (dispatch, getState) => {
    dispatch({
        type: UPDATE_ACTIVE_INTIMATION,
        payload: activeIntimation
    });

    const { activeIntimations, employeeDetails } = getState();

    let filterRes = activeIntimations[1].filter(i => i.empId === employeeDetails.id);
    let loggedInUsersActiveIntimation = filterRes[0];

    if (loggedInUsersActiveIntimation) {
        loggedInUsersActiveIntimation.reason = activeIntimation.reason;
        loggedInUsersActiveIntimation.requests = activeIntimation.requests;

        dispatch(updateActiveIntimations([
            ...activeIntimations[1].filter(i => i.empId !== employeeDetails.id),
            loggedInUsersActiveIntimation
        ]));
    } else {
        if (activeIntimation.reason !== '' && activeIntimation.requests.length > 0) {
            dispatch(updateActiveIntimations([
                ...activeIntimations[1].filter(i => i.empId !== employeeDetails.id),
                {
                    "empId": employeeDetails.id,
                    "empName": employeeDetails.name,
                    "lastModified": `${new Date().toISOString()}`,
                    "reason": activeIntimation.reason,
                    "requests": activeIntimation.requests,
                }
            ]));
        }
    }
};

export default updateActiveIntimation;
