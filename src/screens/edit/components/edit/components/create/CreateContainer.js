import { connect } from 'react-redux';
import Create from './Create';

const mapStateToProps = ({ stageIntimationIncompleteRequest, stageIntimationIsDirty }) => {
    return { stageIntimationIncompleteRequest, stageIntimationIsDirty };
};

export default connect(mapStateToProps)(Create);
