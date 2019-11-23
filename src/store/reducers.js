import { combineReducers } from 'redux';
import { employeeDetailsReducer } from './employee-details/reducers';
import { githubContributorsReducer } from './github-contributors/reducers';
import { selectedDatesReducer } from './selected-dates/reducers';
import { pullToRefreshReducer } from './pull-to-refresh/reducers';
import { activeIntimationsReducer } from './active-intimations/reducers';
import { holidaysReducer } from './holidays/reducers';

export default combineReducers({
    employeeDetails: employeeDetailsReducer,
    githubContributors: githubContributorsReducer,
    selectedDates: selectedDatesReducer,
    pullToRefresh: pullToRefreshReducer,
    activeIntimations: activeIntimationsReducer,
    holidays: holidaysReducer
});
