import { connect } from 'react-redux';

import Cancel from './Cancel';
import { reduceToInactiveIntimation } from '../../../../../../store/inactive-intimations/actions';
import { updateStageIntimation, commitToActiveIntimation } from '../../../../../../store/stage-intimation/actions';
import { updateEmployeeLeaveDetails } from '../../../../../../store/employee-details/actions';
import { setToast } from '../../../../../../store/toast/actions';

const mapStateToProps = ({ employeeDetails }) => {
    return { employeeDetails };
};

export default connect(mapStateToProps, { reduceToInactiveIntimation, updateStageIntimation, commitToActiveIntimation, updateEmployeeLeaveDetails, setToast })(Cancel);
