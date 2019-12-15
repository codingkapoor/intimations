import { connect } from 'react-redux';
import Calendar from './Calendar';
import { updateStageIntimation } from '../../../../store/stage-intimation/actions';
import { setStageIntimationIncompleteRequest } from '../../../../store/stage-intimation-incomplete-request/actions';
import { fetchInactiveIntimations } from '../../../../store/inactive-intimations/actions';

const mapStateToProps = ({ holidays, activeIntimation, stageIntimation, stageIntimationIncompleteRequest }) => {
    return { holidays, activeIntimation, stageIntimation, stageIntimationIncompleteRequest };
};

export default connect(mapStateToProps, { updateStageIntimation, setStageIntimationIncompleteRequest, fetchInactiveIntimations })(Calendar);
