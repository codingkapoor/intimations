import { connect } from 'react-redux';
import Cancel from './Cancel';

const mapStateToProps = ({ stageIntimationIsDirty }) => {
    return { stageIntimationIsDirty };
};

export default connect(mapStateToProps)(Cancel);
