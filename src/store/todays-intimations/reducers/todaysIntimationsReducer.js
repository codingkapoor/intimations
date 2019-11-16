import { UPDATE_TODAYS_INTIMATIONS } from '../actions/types';

const todaysIntimationsReducer = (todaysIntimations = [], { type, payload }) => {
    if (type === UPDATE_TODAYS_INTIMATIONS)
        return payload;

    return todaysIntimations;
}

export default todaysIntimationsReducer;
