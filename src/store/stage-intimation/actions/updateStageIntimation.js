import _ from 'lodash';

import { UPDATE } from './types';
import { setStageIntimationIsDirty } from '../../stage-intimation-is-dirty/actions';

const updateStageIntimation = stageIntimation => (dispatch, getState) => {

    dispatch({
        type: UPDATE,
        payload: stageIntimation
    });

    let { activeIntimation } = getState();

    if (activeIntimation.reason === stageIntimation.reason && _.isEqual(activeIntimation.requests, stageIntimation.requests))
        dispatch(setStageIntimationIsDirty(false));
    else
        dispatch(setStageIntimationIsDirty(true));
};

export default updateStageIntimation;
