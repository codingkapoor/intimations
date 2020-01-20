import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Styles from '../Styles';
import { platform } from '../../../../../../common/apis';
import { CANCEL_SUCCESS, CANCEL_FAILURE } from '../../../../../../common/components/Toasts';
import { getAccessToken } from '../../../../../../common/utils/auth';

export default ({ employeeDetails, reduceToInactiveIntimation, updateStageIntimation, commitToActiveIntimation, updateEmployeeLeaveDetails, setToast }) => {

    const _onPress = async () => {
        const access = await getAccessToken();
        try {
            const res = await platform.put(`/employees/${employeeDetails.id}/intimations/cancel`, null, { headers: { Authorization: "Bearer " + access } });
            setToast(CANCEL_SUCCESS, 100, 3000);
            reduceToInactiveIntimation();
            updateStageIntimation({ 'reason': '', 'requests': [] });
            commitToActiveIntimation();
            updateEmployeeLeaveDetails(res.data);
        } catch (error) {
            console.log(error);
            setToast(CANCEL_FAILURE, 100, 3000);
        }
    }

    return (
        <TouchableOpacity
            style={Styles.cancelWrapper}
            onPress={_onPress}
        >
            <Text style={Styles.cancel}>Cancel</Text>
        </TouchableOpacity>
    );
}
