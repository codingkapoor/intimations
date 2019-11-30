import { UPDATE } from './types';

const updateStageIntimation = stageIntimation => {
    return {
        type: UPDATE,
        payload: stageIntimation
    };
};

export default updateStageIntimation;
