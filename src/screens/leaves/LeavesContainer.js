import { connect } from 'react-redux';
import LeavesScreen from './LeavesScreen';

const mapStateToProps = ({ employeeDetails, pullToRefresh }) => {
    return { employeeDetails, pullToRefresh };
};

export default connect(mapStateToProps)(LeavesScreen);
