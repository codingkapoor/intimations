import { combineReducers } from 'redux';
import { employeeDetailsReducer } from './employee-details/reducers';
import { githubContributorsReducer } from './github-contributors/reducers';
import { selectedDatesReducer } from './selected-dates/reducers';

export default combineReducers({
    employeeDetails: employeeDetailsReducer,
    githubContributors: githubContributorsReducer,
    selectedDates: selectedDatesReducer
});
