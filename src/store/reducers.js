import { combineReducers } from 'redux';
import { employeeDetailsReducer } from './employee-details/reducers';
import { githubContributorsReducer } from './github-contributors/reducers';
import { pullToRefreshReducer } from './pull-to-refresh/reducers';
import { activeIntimationReducer } from './active-intimation/reducers';
import { activeIntimationsReducer } from './active-intimations/reducers';
import { inactiveIntimationsReducer } from './inactive-intimations/reducers';
import { stageIntimationReducer } from './stage-intimation/reducers';
import { stageIntimationIncompleteRequestReducer } from './stage-intimation-incomplete-request/reducers';
import { stageIntimationIsDirtyReducer } from './stage-intimation-is-dirty/reducers';
import { holidaysReducer } from './holidays/reducers';

export default combineReducers({
    employeeDetails: employeeDetailsReducer,
    githubContributors: githubContributorsReducer,
    pullToRefresh: pullToRefreshReducer,
    activeIntimation: activeIntimationReducer,
    activeIntimations: activeIntimationsReducer,
    inactiveIntimations: inactiveIntimationsReducer,
    stageIntimation: stageIntimationReducer,
    stageIntimationIncompleteRequest: stageIntimationIncompleteRequestReducer,
    stageIntimationIsDirty: stageIntimationIsDirtyReducer,
    holidays: holidaysReducer
});
