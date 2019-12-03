import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Styles from '../Styles';
import { platform } from '../../../../../../common/apis';
import Toasts, { INCOMPLETE_REQUEST } from '../../../Toasts';

export default ({ stageIntimationIncompleteRequest, stageIntimationIsDirty }) => {

    const [showToast, setShowToast] = useState(null);
    const [visible, setVisible] = useState(false);
    const setToastVisibility = () => {
        setTimeout(() => setVisible(true), 500);
        setTimeout(() => setVisible(false), 5000);
    }

    const _onPress = () => {
        if (stageIntimationIncompleteRequest.date) {
            setShowToast(INCOMPLETE_REQUEST);
            setToastVisibility();
        }
    }

    return (
        <>
            <TouchableOpacity
                disabled={!stageIntimationIsDirty}
                style={Styles.updateWrapper}
                onPress={_onPress}
            >
                <Text style={Styles.udpate}>Update</Text>
            </TouchableOpacity>
            <Toasts showToast={showToast} visible={visible} />
        </>
    );
}
