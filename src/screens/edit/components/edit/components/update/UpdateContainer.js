import { connect } from 'react-redux';

import Update from './Update';
import { commitToActiveIntimation } from '../../../../../../store/stage-intimation/actions';

const mapStateToProps = ({ employeeDetails, stageIntimation, stageIntimationIncompleteRequest, stageIntimationIsDirty }) => {
    return { employeeDetails, stageIntimation, stageIntimationIncompleteRequest, stageIntimationIsDirty };
};

export default connect(mapStateToProps, { commitToActiveIntimation })(Update);
