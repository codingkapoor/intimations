import { UPDATE_SELECTED_DATES } from '../actions/types';
import _ from 'lodash';

const colors = ['red', 'blue', 'yellow'];

const selectedDatesReducer = (selectedDates = {}, { type, payload }) => {
    if (type === UPDATE_SELECTED_DATES) {
        if (selectedDates[payload]) {
            if (selectedDates[payload].counter === 2)
                return _.omit(selectedDates, payload);
            else {
                selectedDates[payload].counter = selectedDates[payload].counter + 1;
                let selectedColor = colors[selectedDates[payload].counter];
                console.log(selectedColor);
                console.log({ [payload]: { selected: true, selectedColor }, ...selectedDates });
                return { [payload]: { selected: true, selectedColor: `${colors[selectedDates[payload].counter]}` }, ...selectedDates };
            }
        } else
            return { [payload]: { selected: true, selectedColor: 'red', counter: 0 }, ...selectedDates };
    }

    return selectedDates;
}

export default selectedDatesReducer;
