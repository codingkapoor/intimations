import { UPDATE_SELECTED_DATES } from '../actions/types';
import _ from 'lodash';

const colors = ['red', 'blue', 'yellow'];

const selectedDatesReducer = (selectedDates = {}, { type, payload }) => {
    if (type === UPDATE_SELECTED_DATES) {
        if (selectedDates[payload]) {
            let counter = selectedDates[payload].counter
            
            if (counter === 2)
                return _.omit(selectedDates, payload);
            else {
                newCounter = counter + 1;

                let selectedColor = colors[newCounter];
                let value = { selected: true, selectedColor, counter: newCounter };

                return { [payload]: value, ..._.omit(selectedDates, payload) };
            }
        } else
            return { [payload]: { selected: true, selectedColor: 'red', counter: 0 }, ...selectedDates };
    }

    return selectedDates;
}

export default selectedDatesReducer;
