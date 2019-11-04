import { combineReducers } from 'redux';
import { employeeDetailsReducer } from './employee-details/reducers';

export default combineReducers({
    employeeDetails: employeeDetailsReducer
});
