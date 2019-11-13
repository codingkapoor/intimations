import { UPDATE_SELECTED_DATES } from './types';

const updateSelectedDates = date => {
    return {
        type: UPDATE_SELECTED_DATES,
        payload: date
    };
};

export default updateSelectedDates;
