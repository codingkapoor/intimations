import { platform } from '../../../common/apis';
import { updatePullToRefresh } from '../../pull-to-refresh/actions';
import updateActiveIntimations from './updateActiveIntimations';
import updateActiveIntimation from '../../active-intimation/actions/updateActiveIntimation';

const fetchActiveIntimations = (pullToRefresh = false) => async dispatch => {
    if (pullToRefresh) dispatch(updatePullToRefresh(pullToRefresh));

    let res = await platform.get(`/employees/intimations`);
    let activeIntimations = res.data;

    dispatch(updateActiveIntimations(activeIntimations));

    let filterRes = activeIntimations.filter(i => i.empId === 128);
    let loggedInUsersActiveIntimation = filterRes.length > 0 ? filterRes[0] : { 'reason': '', requests: [] };

    dispatch(updateActiveIntimation({
        'reason': loggedInUsersActiveIntimation.reason,
        'requests': loggedInUsersActiveIntimation.requests
    }));

    if (pullToRefresh) dispatch(updatePullToRefresh(!pullToRefresh));
};

export default fetchActiveIntimations;
