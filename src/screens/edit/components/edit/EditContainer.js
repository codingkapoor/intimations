import { connect } from 'react-redux';
import Edit from './Edit';

const mapStateToProps = ({ stageIntimation }) => {
    return { stageIntimation };
};

export default connect(mapStateToProps)(Edit);
