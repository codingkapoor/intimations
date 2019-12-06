import { connect } from 'react-redux';
import Edit from './Edit';

const mapStateToProps = ({ activeIntimation, stageIntimation, stageIntimationIsDirty }) => {
    return { activeIntimation, stageIntimation, stageIntimationIsDirty };
};

export default connect(mapStateToProps)(Edit);
