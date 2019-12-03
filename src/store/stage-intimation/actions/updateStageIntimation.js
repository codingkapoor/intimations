import _ from 'lodash';

import { UPDATE } from './types';
import { setStageIntimationIsDirty } from '../../stage-intimation-is-dirty/actions';

const updateStageIntimation = stageIntimation => (dispatch, getState) => {

    dispatch({
        type: UPDATE,
        payload: stageIntimation
    });

    let { activeIntimations } = getState();

    let filterRes = activeIntimations[1].filter(i => i.empId === 128);
    let loggedInUsersActiveIntimation = filterRes.length > 0 ? filterRes[0] : { 'reason': '', requests: [] };

    if (loggedInUsersActiveIntimation.reason === stageIntimation.reason && _.isEqual(loggedInUsersActiveIntimation.requests, stageIntimation.requests))
        dispatch(setStageIntimationIsDirty(false));
    else
        dispatch(setStageIntimationIsDirty(true));
};

export default updateStageIntimation;
