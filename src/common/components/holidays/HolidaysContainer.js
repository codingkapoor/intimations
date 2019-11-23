import { connect } from 'react-redux';
import Holidays from './Holidays';

const mapStateToProps = ({ holidays }) => {
    return { holidays };
};

export default connect(mapStateToProps, null, null, { forwardRef: true })(Holidays);
