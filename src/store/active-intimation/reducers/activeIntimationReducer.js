import { UPDATE_ACTIVE_INTIMATION } from '../actions/types';

const activeIntimationReducer = (activeIntimation = { 'reason': '', 'requests': [] }, { type, payload }) => {
    if (type === UPDATE_ACTIVE_INTIMATION)
        return payload;

    return activeIntimation;
}

export default activeIntimationReducer;
