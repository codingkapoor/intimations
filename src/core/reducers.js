import { combineReducers } from 'redux';
import { leavesStatusReducer } from '../screens/leaves-status/reducers';

export default combineReducers({
    employeeDetails: leavesStatusReducer
});
