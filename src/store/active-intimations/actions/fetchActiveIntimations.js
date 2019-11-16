import platform from '../../../common/apis/platform';
import { FETCH_ACTIVE_INTIMATIONS } from './types';
import { updatePullToRefresh } from '../../pull-to-refresh/actions'

const fetchActiveIntimations = (pullToRefresh = false) => async dispatch => {
    if (pullToRefresh) dispatch(updatePullToRefresh(pullToRefresh));

    const res = await platform.get(`/employees/intimations`);
    const activeIntimations = res.data;

    dispatch({
        type: FETCH_ACTIVE_INTIMATIONS,
        payload: activeIntimations
    });

    if (pullToRefresh) dispatch(updatePullToRefresh(!pullToRefresh));
};

export default fetchActiveIntimations;
