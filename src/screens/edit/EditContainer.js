import { connect } from 'react-redux';

import EditScreen from './EditScreen';
import { fetchInactiveIntimations } from '../../store/inactive-intimations/actions';

const mapStateToProps = ({ inactiveIntimations }) => {
    return { inactiveIntimations };
};

export default connect(mapStateToProps, { fetchInactiveIntimations })(EditScreen);
