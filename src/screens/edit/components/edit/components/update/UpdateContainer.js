import { connect } from 'react-redux';
import Update from './Update';

const mapStateToProps = ({ stageIntimationIncompleteRequest, stageIntimationIsDirty }) => {
    return { stageIntimationIncompleteRequest, stageIntimationIsDirty };
};

export default connect(mapStateToProps)(Update);
