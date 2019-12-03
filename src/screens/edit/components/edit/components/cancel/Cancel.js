import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from '../Styles';

export default ({ stageIntimationIsDirty }) => {
    return (
        <TouchableOpacity disabled={stageIntimationIsDirty} style={Styles.cancelWrapper}>
            <Text style={Styles.cancel}>Cancel</Text>
        </TouchableOpacity>
    );
}
