import { connect } from 'react-redux';
import Update from './Update';

const mapStateToProps = ({ stageIntimation, stageIntimationIncompleteRequest, stageIntimationIsDirty }) => {
    return { stageIntimation, stageIntimationIncompleteRequest, stageIntimationIsDirty };
};

export default connect(mapStateToProps)(Update);
