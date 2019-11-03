import { connect } from 'react-redux';
import ProfileScreen from './ProfileScreen';

const mapStateToProps = ({ employeeDetails }) => {
    return { employeeDetails };
};

const ProfileContainer = connect(mapStateToProps)(ProfileScreen);

export default ProfileContainer;
