import { connect } from 'react-redux';

import { fetchEmployeeDetails } from '../../store/employee-details/actions';
import LeavesScreen from './LeavesScreen';

const mapStateToProps = ({ employeeDetails, pullToRefresh }) => {
    return { employeeDetails, pullToRefresh };
};

export default connect(mapStateToProps, { fetchEmployeeDetails })(LeavesScreen);
