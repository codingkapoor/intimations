import React from 'react';

import Update from './components/Update';
import Create from './components/Create';
import Cancel from './components/Cancel';

export default ({ stageIntimation }) => {
    return (
        stageIntimation.reason ?
            <><Update /><Cancel /></> : <Create />
    );
}
