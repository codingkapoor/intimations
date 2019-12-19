import { FETCH_INACTIVE_INTIMATIONS, UPDATE_INACTIVE_INTIMATIONS, REDUCE_TO_INACTIVE_INTIMATION } from '../actions/types';

const inactiveIntimationsReducer = (inactiveIntimations = [], { type, payload }) => {
    if (
        type === FETCH_INACTIVE_INTIMATIONS ||
        type === UPDATE_INACTIVE_INTIMATIONS ||
        type === REDUCE_TO_INACTIVE_INTIMATION
    )
        return payload;

    return inactiveIntimations;
}

export default inactiveIntimationsReducer;
