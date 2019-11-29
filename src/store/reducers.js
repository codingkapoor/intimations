import { combineReducers } from 'redux';
import { employeeDetailsReducer } from './employee-details/reducers';
import { githubContributorsReducer } from './github-contributors/reducers';
import { pullToRefreshReducer } from './pull-to-refresh/reducers';
import { activeIntimationsReducer } from './intimations/active-intimations/reducers';
import { holidaysReducer } from './holidays/reducers';

export default combineReducers({
    employeeDetails: employeeDetailsReducer,
    githubContributors: githubContributorsReducer,
    pullToRefresh: pullToRefreshReducer,
    activeIntimations: activeIntimationsReducer,
    holidays: holidaysReducer
});
