import { connect } from 'react-redux';
import LeavesScreen from './LeavesScreen';
import { fetchEmployeeDetails } from '../../store/employee-details/actions';

const mapStateToProps = ({ employeeDetails, pullToRefresh }) => {
    return { employeeDetails, pullToRefresh };
};

export default connect(mapStateToProps, { fetchEmployeeDetails })(LeavesScreen);
