import { connect } from 'react-redux';
import { fetchActiveIntimations } from '../../store/active-intimations/actions';
import { fetchAll } from '../../store/actions';
;import FeedScreen from './FeedScreen';

const mapStateToProps = ({ activeIntimation, activeIntimations, pullToRefresh }) => {
    return { activeIntimation, activeIntimations, pullToRefresh };
};

export default connect(mapStateToProps, { fetchActiveIntimations, fetchAll })(FeedScreen);
