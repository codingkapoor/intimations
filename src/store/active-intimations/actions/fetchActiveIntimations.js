import platform from '../../../common/apis/platform';
import { FETCH_ACTIVE_INTIMATIONS } from './types';
import { updatePullToRefresh } from '../../pull-to-refresh/actions';
import _ from 'lodash';

const remodelActiveintimations = activeIntimations => {
    let _activeIntimations = {};
    let today = new Date().toISOString().split('T')[0];

    const push = (intimation, isToday) => {
        let lastModified = intimation.lastModified.split('T')[0];
        if (!_activeIntimations[lastModified]) _activeIntimations[lastModified] = [];

        intimation["isToday"] = isToday;
        _activeIntimations[lastModified].push(intimation);
        _activeIntimations[lastModified] = _.sortBy(_activeIntimations[lastModified], i => i.empName);
    }

    activeIntimations.forEach(intimation =>
        intimation.requests.filter(request => request.date === today).length > 0 ?
            push(intimation, true) : push(intimation, false)
    );

    return _activeIntimations;
}

const fetchActiveIntimations = (pullToRefresh = false) => async dispatch => {
    if (pullToRefresh) dispatch(updatePullToRefresh(pullToRefresh));

    const res = await platform.get(`/employees/intimations`);
    const activeIntimations = res.data;

    dispatch({
        type: FETCH_ACTIVE_INTIMATIONS,
        payload: remodelActiveintimations(activeIntimations)
    });

    if (pullToRefresh) dispatch(updatePullToRefresh(!pullToRefresh));
};

export default fetchActiveIntimations;
