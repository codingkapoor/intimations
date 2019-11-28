import { connect } from 'react-redux';
import Calendar from './Calendar';

const mapStateToProps = ({ holidays }) => {
    return { holidays };
};

export default connect(mapStateToProps)(Calendar);
