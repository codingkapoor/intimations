import { connect } from 'react-redux';

import Update from './Update';
import { commitToActiveIntimation } from '../../../../../../store/stage-intimation/actions';

const mapStateToProps = ({ stageIntimation, stageIntimationIncompleteRequest, stageIntimationIsDirty }) => {
    return { stageIntimation, stageIntimationIncompleteRequest, stageIntimationIsDirty };
};

export default connect(mapStateToProps, { commitToActiveIntimation })(Update);
