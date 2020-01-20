import { connect } from 'react-redux';

import Create from './Create';
import { commitToActiveIntimation } from '../../../../../../store/stage-intimation/actions';
import { updateEmployeeLeaveDetails } from '../../../../../../store/employee-details/actions';
import { setToast } from '../../../../../../store/toast/actions';

const mapStateToProps = ({ employeeDetails, stageIntimation, stageIntimationIncompleteRequest }) => {
    return { employeeDetails, stageIntimation, stageIntimationIncompleteRequest };
};

export default connect(mapStateToProps, { commitToActiveIntimation, updateEmployeeLeaveDetails, setToast })(Create);
