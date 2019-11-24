import { FETCH_HOLIDAYS } from '../actions/types';

const holidaysReducer = (holidays = [], { type, payload }) => {
    if (type === FETCH_HOLIDAYS) {
        return payload;
    }

    return holidays;
}

export default holidaysReducer;
