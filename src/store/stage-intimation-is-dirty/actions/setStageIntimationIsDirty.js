import { SET_STAGE_INTIMATION_IS_DIRTY } from './types';

const setStageIntimationIsDirty = stageIntimationIsDirty => {
    return {
        type: SET_STAGE_INTIMATION_IS_DIRTY,
        payload: stageIntimationIsDirty
    };
};

export default setStageIntimationIsDirty;
