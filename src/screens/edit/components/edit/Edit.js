import React from 'react';

import Update from './components/Update';
import Create from './components/Create';
import Cancel from './components/Cancel';

export default ({ stageIntimation }) => {

    let currentDate = new Date(new Date().toISOString().split('T')[0]);

    const isAlready5 = () =>
        currentDate.getHours() >= 17

    const isToday = () =>
        stageIntimation.requests.filter(r => r.date === currentDate).length > 0

    if (stageIntimation.reason || stageIntimation.requests) {
        if (stageIntimation.requests.length > 0) {
            if (stageIntimation.requests.length === 1 && isToday() && isAlready5())
                return <Create />;
            return <><Update /><Cancel /></>;
        }
    }

    return <Create />;
}
