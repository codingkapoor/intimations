import { connect } from 'react-redux';
import Reset from './Reset';
import { checkoutFromActiveIntimation } from '../../../../../../store/stage-intimation/actions'

const mapStateToProps = ({ stageIntimationIsDirty }) => {
    return { stageIntimationIsDirty };
};

export default connect(mapStateToProps, { checkoutFromActiveIntimation })(Reset);
