import { UPDATE_SETECTED_DATES } from './types';

const updateSelectedDates = date => {
    return {
        type: UPDATE_SETECTED_DATES,
        payload: date
    };
};

export default updateSelectedDates;
