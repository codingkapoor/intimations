import platform from '../../../common/apis/platform';
import { FETCH_ACTIVE_INTIMATIONS } from './types';
import { updatePullToRefresh } from '../../pull-to-refresh/actions';
import _ from 'lodash';
import { BadgeColor } from '../../../common/Constants';

let todayDate = new Date().toISOString().split('T')[0];

const _prepareTodayAndMarkedDates = (request, today, markedDates, holidays) => {
    if (request.date === todayDate) {
        today['firstHalf'] = request.firstHalf;
        today['secondHalf'] = request.secondHalf;
    }

    markedDates[request.date] = {
        dots: [
            { color: BadgeColor[request.firstHalf], borderColor: BadgeColor[request.firstHalf] },
            { color: BadgeColor[request.secondHalf], borderColor: BadgeColor[request.secondHalf] }
        ]
    };

    holidays.forEach(holiday => markedDates[holiday.date] = {
        dots: [{ color: '#E5B001', borderColor: '#E5B001' }]
    });
}

const _remodelActiveintimations = (activeIntimations, holidays) => {
    let _activeIntimations = {};

    const push = (intimation, isToday, isPlanned) => {
        let lastModified = intimation.lastModified.split('T')[0];
        if (!_activeIntimations[lastModified]) _activeIntimations[lastModified] = [];

        intimation['isToday'] = isToday;
        intimation['isPlanned'] = isPlanned;

        let today = {};
        let markedDates = {};
        intimation.requests.map(request => _prepareTodayAndMarkedDates(request, today, markedDates, holidays));

        if (isToday) intimation['today'] = today;
        if (isPlanned) intimation['markedDates'] = markedDates;

        _activeIntimations[lastModified].push(intimation);
        _activeIntimations[lastModified] = _.sortBy(_activeIntimations[lastModified], i => i.empName);
    }

    activeIntimations.forEach(intimation =>
        intimation.requests.filter(request => request.date === todayDate).length === 0 ?
            push(intimation, false, true) :
            (intimation.requests.length === 1) ? push(intimation, true, false) : push(intimation, true, true)
    );

    return _activeIntimations;
}

const fetchActiveIntimations = (pullToRefresh = false) => async (dispatch, getState) => {
    if (pullToRefresh) dispatch(updatePullToRefresh(pullToRefresh));

    const res = await platform.get(`/employees/intimations`);
    const activeIntimations = res.data;

    const { holidays } = getState();

    dispatch({
        type: FETCH_ACTIVE_INTIMATIONS,
        payload: _remodelActiveintimations(activeIntimations, holidays[1])
    });

    if (pullToRefresh) dispatch(updatePullToRefresh(!pullToRefresh));
};

export default fetchActiveIntimations;
