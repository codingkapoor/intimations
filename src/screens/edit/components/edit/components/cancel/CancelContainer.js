import { connect } from 'react-redux';

import Cancel from './Cancel';
import { reduceToInactiveIntimation } from '../../../../../../store/inactive-intimations/actions';
import { updateStageIntimation, commitToActiveIntimation } from '../../../../../../store/stage-intimation/actions';

const mapStateToProps = ({ employeeDetails, stageIntimationIsDirty }) => {
    return { employeeDetails, stageIntimationIsDirty };
};

export default connect(mapStateToProps, { reduceToInactiveIntimation, updateStageIntimation, commitToActiveIntimation })(Cancel);
