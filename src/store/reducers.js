import { combineReducers } from 'redux';
import { employeeDetailsReducer } from './employee-details/reducers';
import { githubContributorsReducer } from './github-contributors/reducers';
import { pullToRefreshReducer } from './pull-to-refresh/reducers';
import { activeIntimationsReducer } from './active-intimations/reducers';
import { inactiveIntimationsReducer } from './inactive-intimations/reducers';
import { stageIntimationReducer } from './stage-intimation/reducers';
import { holidaysReducer } from './holidays/reducers';

export default combineReducers({
    employeeDetails: employeeDetailsReducer,
    githubContributors: githubContributorsReducer,
    pullToRefresh: pullToRefreshReducer,
    activeIntimations: activeIntimationsReducer,
    inactiveIntimations: inactiveIntimationsReducer,
    stageIntimation: stageIntimationReducer,
    holidays: holidaysReducer
});
