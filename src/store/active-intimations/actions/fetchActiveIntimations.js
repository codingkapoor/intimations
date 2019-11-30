import _ from 'lodash';

import platform from '../../../common/apis/platform';
import { updatePullToRefresh } from '../../pull-to-refresh/actions';
import { FETCH_ACTIVE_INTIMATIONS } from './types';
import checkoutFromActiveIntimation from '../../stage-intimation/actions/checkoutFromActiveIntimation';

const todayDate = new Date();
const todayDateStr = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`;

const _getHalvesForToday = (request, today) => {
    if (request.date === todayDateStr) {
        today['firstHalf'] = request.firstHalf;
        today['secondHalf'] = request.secondHalf;
    }
}

const _remodelActiveIntimations = activeIntimations => {
    let _activeIntimations = {};

    const push = (intimation, isToday, isPlanned) => {
        let lastModified = intimation.lastModified.split('T')[0];
        if (!_activeIntimations[lastModified]) _activeIntimations[lastModified] = [];

        intimation['isToday'] = isToday;
        intimation['isPlanned'] = isPlanned;

        let today = {};
        intimation.requests.map(request => _getHalvesForToday(request, today));

        if (isToday) intimation['today'] = today;

        _activeIntimations[lastModified].push(intimation);
        _activeIntimations[lastModified] = _.sortBy(_activeIntimations[lastModified], i => i.empName);
    }

    activeIntimations.forEach(intimation =>
        intimation.requests.filter(request => request.date === todayDateStr).length === 0 ?
            push(intimation, false, true) :
            (intimation.requests.length === 1) ? push(intimation, true, false) : push(intimation, true, true)
    );

    return _activeIntimations;
}

const fetchActiveIntimations = (pullToRefresh = false) => async dispatch => {
    if (pullToRefresh) dispatch(updatePullToRefresh(pullToRefresh));

    let res = await platform.get(`/employees/intimations`);
    let activeIntimations = res.data;

    let payload = _remodelActiveIntimations(activeIntimations);

    dispatch({
        type: FETCH_ACTIVE_INTIMATIONS,
        payload
    });

    let filterRes = activeIntimations.filter(i => i.empId === 127);
    let loggedInUsersActiveIntimation = filterRes.length > 0 ? filterRes[0] : {};
    dispatch(checkoutFromActiveIntimation(loggedInUsersActiveIntimation));

    if (pullToRefresh) dispatch(updatePullToRefresh(!pullToRefresh));
};

export default fetchActiveIntimations;
