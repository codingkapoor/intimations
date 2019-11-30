import { connect } from 'react-redux';
import Calendar from './Calendar';

const mapStateToProps = ({ holidays, stageIntimation }) => {
    return { holidays, stageIntimation };
};

export default connect(mapStateToProps)(Calendar);
