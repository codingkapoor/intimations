import { combineReducers } from 'redux';
import { leavesStatusReducer } from './employee-details/reducers';

export default combineReducers({
    employeeDetails: leavesStatusReducer
});
