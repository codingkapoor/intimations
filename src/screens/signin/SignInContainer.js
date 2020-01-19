import { connect } from 'react-redux';

import SignInScreen from './SignInScreen';
import { setToast } from '../../store/toast/actions';

const mapStateToProps = ({ toast }) => {
    return { toast };
};

export default connect(mapStateToProps, { setToast })(SignInScreen);
