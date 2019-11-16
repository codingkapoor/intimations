import { connect } from 'react-redux';
import { fetchActiveIntimations } from '../../store/active-intimations/actions';
import { fetchEmployeeDetails } from '../../store/employee-details/actions';
import LeavesScreen from './LeavesScreen';

const mapStateToProps = ({ employeeDetails, pullToRefresh }) => {
    return { employeeDetails, pullToRefresh };
};

export default connect(mapStateToProps, { fetchEmployeeDetails, fetchActiveIntimations })(LeavesScreen);
