import { connect } from 'react-redux';
import { fetchActiveIntimations } from '../../store/intimations/active-intimations/actions';
import { fetchAll } from '../../store/actions';
;import FeedScreen from './FeedScreen';

const mapStateToProps = ({ activeIntimations, pullToRefresh }) => {
    return { activeIntimations, pullToRefresh };
};

export default connect(mapStateToProps, { fetchActiveIntimations, fetchAll })(FeedScreen);
