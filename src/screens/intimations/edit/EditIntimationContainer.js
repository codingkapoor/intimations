import { connect } from 'react-redux';

import { updateSelectedDates } from '../../../store/selected-dates/actions';
import EditIntimationScreen from './EditIntimationScreen';

const mapStateToProps = ({ selectedDates }) => {
    return { selectedDates };
};

export default connect(mapStateToProps, { updateSelectedDates })(EditIntimationScreen);
