import { SET_STAGE_INTIMATION_INCOMPLETE_REQUEST } from '../actions/types';

const stageIntimationIncompleteRequestReducer = (stageIntimationIncompleteRequest = {}, { type, payload }) => {
    if (type === SET_STAGE_INTIMATION_INCOMPLETE_REQUEST)
        return payload;

    return stageIntimationIncompleteRequest;
}

export default stageIntimationIncompleteRequestReducer;
