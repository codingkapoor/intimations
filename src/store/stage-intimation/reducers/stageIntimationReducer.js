import { CHECKOUT, UPDATE } from '../actions/types';

const stageIntimationReducer = (stageIntimation = {}, { type, payload }) => {
    if (type === CHECKOUT || type === UPDATE)
        return payload;

    return stageIntimation;
}

export default stageIntimationReducer;
