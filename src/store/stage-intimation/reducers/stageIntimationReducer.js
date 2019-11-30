import { CHECKOUT } from '../actions/types';

const stageIntimationReducer = (stageIntimation = {}, { type, payload }) => {
    if (type === CHECKOUT)
        return payload;

    return stageIntimation;
}

export default stageIntimationReducer;
