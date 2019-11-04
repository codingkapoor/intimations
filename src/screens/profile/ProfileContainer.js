import { connect } from 'react-redux';
import ProfileScreen from './ProfileScreen';

const mapStateToProps = ({ employeeDetails }) => {
    return { employeeDetails };
};

export default connect(mapStateToProps)(ProfileScreen);
