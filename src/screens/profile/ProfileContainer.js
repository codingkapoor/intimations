import { connect } from 'react-redux';
import ProfileScreen from './ProfileScreen';
import { fetchEmployeeDetails } from '../../store/employee-details/actions';

const mapStateToProps = ({ employeeDetails }) => {
    return { employeeDetails };
};

export default connect(mapStateToProps, { fetchEmployeeDetails })(ProfileScreen);
