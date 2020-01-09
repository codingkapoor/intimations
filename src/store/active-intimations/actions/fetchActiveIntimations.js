import { platform } from '../../../common/apis';
import { updatePullToRefresh } from '../../pull-to-refresh/actions';
import updateActiveIntimations from './updateActiveIntimations';
import updateActiveIntimation from '../../active-intimation/actions/updateActiveIntimation';
import { getAccessToken } from '../../../common/utils/auth';

const fetchActiveIntimations = (pullToRefresh = false) => async (dispatch, getState) => {
    if (pullToRefresh) dispatch(updatePullToRefresh(pullToRefresh));

    const access = await getAccessToken();
    let res = await platform.get(`/employees/intimations`, { headers: { Authorization: "Bearer " + access, 'Content-Type': 'text/plain' } });
    let activeIntimations = res.data;

    dispatch(updateActiveIntimations(activeIntimations));

    const { employeeDetails } = getState();
    let filterRes = activeIntimations.filter(i => i.empId === employeeDetails.id);
    let loggedInUsersActiveIntimation = filterRes[0];

    dispatch(updateActiveIntimation({
        'reason': loggedInUsersActiveIntimation ? loggedInUsersActiveIntimation.reason : '',
        'requests': loggedInUsersActiveIntimation ? loggedInUsersActiveIntimation.requests : []
    }));

    if (pullToRefresh) dispatch(updatePullToRefresh(!pullToRefresh));
};

export default fetchActiveIntimations;
