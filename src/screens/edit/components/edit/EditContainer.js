import { connect } from 'react-redux';
import Edit from './Edit';

const mapStateToProps = ({ stageIntimation, stageIntimationIsDirty }) => {
    return { stageIntimation, stageIntimationIsDirty };
};

export default connect(mapStateToProps)(Edit);
