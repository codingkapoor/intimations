import React from 'react';

import UpdateContainer from './components/update/UpdateContainer';
import CreateContainer from './components/create/CreateContainer';
import CancelContainer from './components/cancel/CancelContainer';
import ResetContainer from './components/reset/ResetContainer';

export default ({ stageIntimation, stageIntimationIsDirty }) => {

    let currentDate = new Date(new Date().toISOString().split('T')[0]);

    const isAlready5 = () =>
        currentDate.getHours() >= 17

    const isToday = () =>
        stageIntimation.requests.filter(r => r.date === currentDate).length > 0

    if (stageIntimation.reason || stageIntimation.requests) {
        if (stageIntimation.requests.length > 0) {
            if (stageIntimation.requests.length === 1 && isToday() && isAlready5())
                return <><CreateContainer /><ResetContainer /></>;
            return stageIntimationIsDirty ? <><UpdateContainer /><ResetContainer /></> : <CancelContainer />;
        }
    }

    return <><CreateContainer /><ResetContainer /></>;
}
