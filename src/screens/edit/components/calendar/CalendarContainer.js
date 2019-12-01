import { connect } from 'react-redux';
import Calendar from './Calendar';
import { updateStageIntimation } from '../../../../store/stage-intimation/actions';

const mapStateToProps = ({ holidays, stageIntimation }) => {
    return { holidays, stageIntimation };
};

export default connect(mapStateToProps, { updateStageIntimation })(Calendar);
