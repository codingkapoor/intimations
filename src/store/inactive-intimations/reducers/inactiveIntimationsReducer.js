import { FETCH_INACTIVE_INTIMATIONS } from '../actions/types';

const inactiveIntimationsReducer = (inactiveIntimations = [], { type, payload }) => {
    if (type === FETCH_INACTIVE_INTIMATIONS)
        return payload;

    return inactiveIntimations;
}

export default inactiveIntimationsReducer;
