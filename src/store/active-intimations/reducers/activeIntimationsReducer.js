import { FETCH_ACTIVE_INTIMATIONS } from '../actions/types';

const activeIntimationsReducer = (activeIntimations = {}, { type, payload }) => {
    if (type === FETCH_ACTIVE_INTIMATIONS)
        return payload;

    return activeIntimations;
}

export default activeIntimationsReducer;
