import { connect } from 'react-redux';

import { fetchEmployeeDetails } from '../../store/employee-details/actions';
import LeavesScreen from './LeavesScreen';

const mapStateToProps = ({ employeeDetails }) => {
    return { employeeDetails };
};

export default connect(mapStateToProps, { fetchEmployeeDetails })(LeavesScreen);
