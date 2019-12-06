import { CHECKOUT } from './types';
import { setStageIntimationIncompleteRequest } from '../../stage-intimation-incomplete-request/actions';
import { setStageIntimationIsDirty } from '../../stage-intimation-is-dirty/actions';

const checkoutFromActiveIntimation = () => (dispatch, getState) => {

    let { activeIntimation } = getState();

    dispatch({
        type: CHECKOUT,
        payload: activeIntimation
    });

    dispatch(setStageIntimationIncompleteRequest({}));
    dispatch(setStageIntimationIsDirty(false));
};

export default checkoutFromActiveIntimation;
