import { UPDATE_SETECTED_DATES } from '../actions/types';

const colors = ['red', 'blue', 'yellow'];

const selectedDatesReducer = (selectedDates = {}, { type, payload }) => {
    if (type === UPDATE_SETECTED_DATES) {
        if (selectedDates[payload]) {
            if (selectedDates[payload].counter === 2)
                return _.omit(selectedDates, payload);
            else {
                selectedDates[payload].counter = selectedDates[payload].counter + 1;
                return { [payload]: { selected: true, selectedColor: `${colors[counter]}` }, ...selectedDates };
            }
        } else
            return { [payload]: { selected: true, selectedColor: 'red' }, ...selectedDates };
    }

    return selectedDates;
}

export default selectedDatesReducer;
