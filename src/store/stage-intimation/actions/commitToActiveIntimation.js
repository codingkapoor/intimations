import { setStageIntimationIsDirty } from '../../stage-intimation-is-dirty/actions';
import updateActiveIntimation from '../../active-intimation/actions/updateActiveIntimation';

const commitToActiveIntimation = () => (dispatch, getState) => {

    let { stageIntimation } = getState();

    dispatch(updateActiveIntimation(stageIntimation));

    dispatch(setStageIntimationIsDirty(false));
};

export default commitToActiveIntimation;
