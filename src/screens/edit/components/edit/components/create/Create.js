import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Styles from '../Styles';
import { platform } from '../../../../../../common/apis';
import { INCOMPLETE_REQUEST, CREATE_FAILURE, CREATE_SUCCESS, EMPTY_REASON, EMPTY_REQUESTS } from '../../../../../../common/components/Toasts';
import { getAccessToken } from '../../../../../../common/utils/auth';

export default ({ employeeDetails, stageIntimation, stageIntimationIncompleteRequest, commitToActiveIntimation, updateEmployeeLeaveDetails, setToast }) => {

    const _onPress = async () => {
        if (stageIntimationIncompleteRequest.date)
            setToast(INCOMPLETE_REQUEST, 100, 3000);
        else if (stageIntimation.requests.length === 0)
            setToast(EMPTY_REQUESTS, 100, 3000);
        else if (stageIntimation.reason === '')
            setToast(EMPTY_REASON, 100, 3000);
        else {
            const access = await getAccessToken();
            try {
                const res = await platform.post(`/employees/${employeeDetails.id}/intimations`, stageIntimation, { headers: { Authorization: "Bearer " + access } });
                setToast(CREATE_SUCCESS, 100, 3000);
                commitToActiveIntimation();
                updateEmployeeLeaveDetails(res.data);
            } catch (error) {
                console.log(error);
                setToast(CREATE_FAILURE, 100, 3000);
            }
        }
    }

    return (
        <TouchableOpacity
            style={Styles.createWrapper}
            onPress={_onPress}
        >
            <Text style={Styles.create}>Create</Text>
        </TouchableOpacity>
    );
}
