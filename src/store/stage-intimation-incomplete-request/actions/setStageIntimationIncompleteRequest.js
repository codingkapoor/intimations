import { SET_STAGE_INTIMATION_INCOMPLETE_REQUEST } from './types';

const setStageIntimationIncompleteRequest = stageIntimationIncompleteRequest => {
    return {
        type: SET_STAGE_INTIMATION_INCOMPLETE_REQUEST,
        payload: stageIntimationIncompleteRequest
    };
};

export default setStageIntimationIncompleteRequest;
