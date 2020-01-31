import { connect } from 'react-redux';

import DetailsList from './DetailsList';

const mapStateToProps = ({ inactiveIntimations }) => {
    return { inactiveIntimations };
};

export default connect(mapStateToProps, null, null, { forwardRef: true })(DetailsList);
