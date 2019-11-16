import { connect } from 'react-redux';

import { fetchActiveIntimations } from '../../../store/active-intimations/actions';
import TodaysIntimationsScreen from './TodaysIntimationsScreen';

const mapStateToProps = ({ todaysIntimations, pullToRefresh }) => {
    return { todaysIntimations, pullToRefresh };
};

export default connect(mapStateToProps, { fetchActiveIntimations })(TodaysIntimationsScreen);
