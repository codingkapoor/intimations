import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Styles from '../Styles';
import { platform } from '../../../../../../common/apis';
import Toasts, { INCOMPLETE_REQUEST, CREATE_FAILURE, CREATE_SUCCESS, EMPTY_REASON } from '../../../Toasts';

export default ({ stageIntimation, stageIntimationIncompleteRequest, stageIntimationIsDirty, commitToActiveIntimation }) => {

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
        } else if (stageIntimation.reason === '') {
            setShowToast(EMPTY_REASON);
            setToastVisibility();
        } else {
            platform.post('/employees/128/intimations', stageIntimation)
                .then(() => {
                    setShowToast(CREATE_SUCCESS);
                    setToastVisibility();
                    commitToActiveIntimation();
                })
                .catch(error => {
                    console.log(error);
                    setShowToast(CREATE_FAILURE);
                    setToastVisibility();
                });
        }
    }

    return (
        <>
            <TouchableOpacity
                disabled={!stageIntimationIsDirty}
                style={Styles.createWrapper}
                onPress={_onPress}
            >
                <Text style={Styles.create}>Create</Text>
            </TouchableOpacity>
            <Toasts showToast={showToast} visible={visible} />
        </>
    );
}
