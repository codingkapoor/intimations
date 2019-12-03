import { CHECKOUT } from './types';
import { setStageIntimationIncompleteRequest } from '../../stage-intimation-incomplete-request/actions';
import { setStageIntimationIsDirty } from '../../stage-intimation-is-dirty/actions';

const checkoutFromActiveIntimation = () => (dispatch, getState) => {

    let { activeIntimations } = getState();

    let filterRes = activeIntimations[1].filter(i => i.empId === 128);
    let loggedInUsersActiveIntimation = filterRes.length > 0 ? filterRes[0] : { 'reason': '', requests: [] };

    let stageIntimation = {};
    stageIntimation['reason'] = loggedInUsersActiveIntimation.reason;
    stageIntimation['requests'] = loggedInUsersActiveIntimation.requests;

    dispatch({
        type: CHECKOUT,
        payload: stageIntimation
    });

    dispatch(setStageIntimationIncompleteRequest({}));
    dispatch(setStageIntimationIsDirty(false));
};

export default checkoutFromActiveIntimation;
