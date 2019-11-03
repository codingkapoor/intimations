import { connect } from 'react-redux';

import { fetchEmployeeDetails } from './actions';
import LeavesStatusScreen from './LeavesStatusScreen';

const mapStateToProps = ({ employeeDetails }) => {
    return { employeeDetails };
};

const LeavesStatusContainer = connect(mapStateToProps, { fetchEmployeeDetails })(LeavesStatusScreen);

export default LeavesStatusContainer;
