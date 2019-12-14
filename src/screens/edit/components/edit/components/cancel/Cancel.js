import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import Styles from '../Styles';

export default ({ stageIntimationIsDirty }) => {

    const _onPress = () => {
        
    }

    return (
        <TouchableOpacity
            disabled={stageIntimationIsDirty}
            style={Styles.cancelWrapper}
            onPress={_onPress}
        >
            <Text style={Styles.cancel}>Cancel</Text>
        </TouchableOpacity>
    );
}
