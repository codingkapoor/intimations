import { connect } from 'react-redux';
import Calendar from './Calendar';
import { updateStageIntimation } from '../../../../store/stage-intimation/actions';
import { setStageIntimationIncompleteRequest } from '../../../../store/stage-intimation-incomplete-request/actions';
import { setStageIntimationIsDirty } from '../../../../store/stage-intimation-is-dirty/actions';

const mapStateToProps = ({ holidays, stageIntimation, stageIntimationIncompleteRequest }) => {
    return { holidays, stageIntimation, stageIntimationIncompleteRequest };
};

export default connect(mapStateToProps, { updateStageIntimation, setStageIntimationIncompleteRequest, setStageIntimationIsDirty })(Calendar);
