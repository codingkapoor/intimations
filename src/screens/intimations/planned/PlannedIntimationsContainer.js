import { connect } from 'react-redux';

import { fetchActiveIntimations } from '../../../store/active-intimations/actions';
import PlannedIntimationsScreen from './PlannedIntimationsScreen';

const mapStateToProps = ({ activeIntimations, pullToRefresh }) => {
    return { activeIntimations, pullToRefresh };
};

export default connect(mapStateToProps, { fetchActiveIntimations })(PlannedIntimationsScreen);
