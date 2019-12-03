import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from '../Styles';

export default ({ stageIntimationIncompleteRequest, stageIntimationIsDirty }) => {
    return (
        <TouchableOpacity disabled={!stageIntimationIsDirty} style={Styles.updateWrapper}>
            <Text style={Styles.udpate}>Update</Text>
        </TouchableOpacity>
    );
}
