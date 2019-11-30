import { connect } from 'react-redux';

import EditScreen from './EditScreen';
import { fetchInactiveIntimations } from '../../store/inactive-intimations/actions';
import { updateStageIntimation } from '../../store/stage-intimation/actions';

const mapStateToProps = ({ inactiveIntimations, stageIntimation }) => {
    return { inactiveIntimations, stageIntimation };
};

export default connect(mapStateToProps, { fetchInactiveIntimations, updateStageIntimation })(EditScreen);
