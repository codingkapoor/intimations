import _ from 'lodash';

import { UPDATE_ACTIVE_INTIMATION } from './types';
import updateActiveIntimations from '../../active-intimations/actions/updateActiveIntimations';

const updateActiveIntimation = activeIntimation => (dispatch, getState) => {
    dispatch({
        type: UPDATE_ACTIVE_INTIMATION,
        payload: activeIntimation
    });

    const { activeIntimations } = getState();

    let filterRes = activeIntimations[1].filter(i => i.empId === 128);
    let loggedInUsersActiveIntimation = filterRes.length > 0 ? filterRes[0] : { 'reason': '', requests: [] };

    if (
        loggedInUsersActiveIntimation.reason !== activeIntimation.reason ||
        loggedInUsersActiveIntimation.requests !== activeIntimation.requests
    ) {
        loggedInUsersActiveIntimation.reason = activeIntimation.reason;
        loggedInUsersActiveIntimation.requests = activeIntimation.requests;

        dispatch(updateActiveIntimations(
            [
                ...activeIntimations[1].filter(i => i.empId !== 128),
                loggedInUsersActiveIntimation
            ]
        ));
    }
};

export default updateActiveIntimation;
