import platform from '../../../common/apis/platform';
import { FETCH_EMPLOYEE_DETAILS } from './types';
import { updatePullToRefresh } from '../../pull-to-refresh/actions'

const fetchEmployeeDetails = (id, pullToRefresh = false) => async dispatch => {
    if (pullToRefresh) dispatch(updatePullToRefresh(pullToRefresh));

    const res = await platform.get(`/employees/${id}`);
    const employeeDetails = res.data;

    dispatch({
        type: FETCH_EMPLOYEE_DETAILS,
        payload: employeeDetails
    });

    if (pullToRefresh) dispatch(updatePullToRefresh(!pullToRefresh));
};

export default fetchEmployeeDetails;
