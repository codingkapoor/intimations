import { platform } from '../../../common/apis';
import { FETCH_EMPLOYEE_DETAILS } from './types';
import { updatePullToRefresh } from '../../pull-to-refresh/actions';
import { getAccessToken } from '../../../common/utils/auth';

const fetchEmployeeDetails = (id, pullToRefresh = false) => async dispatch => {
    if (pullToRefresh) dispatch(updatePullToRefresh(pullToRefresh));

    const access = await getAccessToken();
    const res = await platform.get(`/employees/${id}`, { headers: { Authorization: "Bearer " + access, 'Content-Type': 'text/plain' } });
    const employeeDetails = res.data;

    dispatch({
        type: FETCH_EMPLOYEE_DETAILS,
        payload: employeeDetails
    });

    if (pullToRefresh) dispatch(updatePullToRefresh(!pullToRefresh));
};

export default fetchEmployeeDetails;
