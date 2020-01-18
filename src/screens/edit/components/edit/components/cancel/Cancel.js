import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Styles from '../Styles';
import { platform } from '../../../../../../common/apis';
import Toasts, { CANCEL_SUCCESS, CANCEL_FAILURE } from '../../../Toasts';
import { getAccessToken } from '../../../../../../common/utils/auth';

export default ({ employeeDetails, stageIntimationIsDirty, reduceToInactiveIntimation, updateStageIntimation, commitToActiveIntimation }) => {

    const [showToast, setShowToast] = useState(null);
    const [visible, setVisible] = useState(false);
    const setToastVisibility = () => {
        setTimeout(() => setVisible(true), 500);
        setTimeout(() => setVisible(false), 5000);
    }

    const _onPress = async () => {
        const access = await getAccessToken();
        platform.put(`/employees/${employeeDetails.id}/intimations/cancel`, null, { headers: { Authorization: "Bearer " + access } })
            .then(() => {
                setShowToast(CANCEL_SUCCESS);
                setToastVisibility();
                reduceToInactiveIntimation();
                updateStageIntimation({ 'reason': '', 'requests': [] });
                commitToActiveIntimation();
            })
            .catch(error => {
                console.log(error);
                setShowToast(CANCEL_FAILURE);
                setToastVisibility();
            });
    }

    return (
        <>
            <TouchableOpacity
                style={Styles.cancelWrapper}
                onPress={_onPress}
            >
                <Text style={Styles.cancel}>Cancel</Text>
            </TouchableOpacity>
            <Toasts showToast={showToast} visible={visible} />
        </>
    );
}
