import { UPDATE_SELECTED_DATES } from '../actions/types';
import _ from 'lodash';

const colors = ['#D6EA38', '#9DAB27', '#555D17', '#FCA5A5', '#E36969', '#9B0707'];

const selectedDatesReducer = (selectedDates = {}, { type, payload }) => {
    if (type === UPDATE_SELECTED_DATES) {
        if (selectedDates[payload]) {
            let counter = selectedDates[payload].counter

            if (counter === 5)
                return _.omit(selectedDates, payload);
            else {
                newCounter = counter + 1;

                let selectedColor = colors[newCounter];
                let value = { selected: true, selectedColor, counter: newCounter };

                return { [payload]: value, ..._.omit(selectedDates, payload) };
            }
        } else
            return { [payload]: { selected: true, selectedColor: `${colors[0]}`, counter: 0 }, ...selectedDates };
    }

    return selectedDates;
}

export default selectedDatesReducer;
