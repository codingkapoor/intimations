import { connect } from 'react-redux';

import Create from './Create';
import { commitToActiveIntimation } from '../../../../../../store/stage-intimation/actions';

const mapStateToProps = ({ stageIntimation, stageIntimationIncompleteRequest, stageIntimationIsDirty }) => {
    return { stageIntimation, stageIntimationIncompleteRequest, stageIntimationIsDirty };
};

export default connect(mapStateToProps, { commitToActiveIntimation })(Create);
