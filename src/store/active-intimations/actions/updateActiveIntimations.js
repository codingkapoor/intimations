import _ from 'lodash';

import { UPDATE_ACTIVE_INTIMATIONS } from './types';

const _remodelActiveIntimations = activeIntimations => {
    const todayDate = new Date();
    const todayDateStr = `${todayDate.getFullYear()}-${(todayDate.getMonth() + 1).toString().padStart(2, "0")}-${todayDate.getDate().toString().padStart(2, "0")}`;

    const _getHalvesForToday = (request, today) => {
        if (request.date === todayDateStr) {
            today['firstHalf'] = request.firstHalf;
            today['secondHalf'] = request.secondHalf;
        }
    }

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

const updateActiveIntimations = activeIntimations => dispatch => {
    dispatch({
        type: UPDATE_ACTIVE_INTIMATIONS,
        payload: [_remodelActiveIntimations(activeIntimations), activeIntimations]
    });
};

export default updateActiveIntimations;
