import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Styles from '../Styles';
import { platform } from '../../../../../../common/apis';
import { INCOMPLETE_REQUEST, CREATE_FAILURE, CREATE_SUCCESS, EMPTY_REASON } from '../../../../../../common/components/Toasts';
import { getAccessToken } from '../../../../../../common/utils/auth';

export default ({ employeeDetails, stageIntimation, stageIntimationIncompleteRequest, stageIntimationIsDirty, commitToActiveIntimation, setToast }) => {

    const _onPress = async () => {
        if (stageIntimationIncompleteRequest.date)
            setToast(INCOMPLETE_REQUEST, 100, 3000);
        else if (stageIntimation.reason === '')
            setToast(EMPTY_REASON, 100, 3000);
        else {
            const access = await getAccessToken();
            platform.post(`/employees/${employeeDetails.id}/intimations`, stageIntimation, { headers: { Authorization: "Bearer " + access } })
                .then(() => {
                    setToast(CREATE_SUCCESS, 100, 3000);
                    commitToActiveIntimation();
                })
                .catch(error => {
                    console.log(error);
                    setToast(CREATE_FAILURE, 100, 3000);
                });
        }
    }

    return (
        <TouchableOpacity
            disabled={!stageIntimationIsDirty}
            style={Styles.createWrapper}
            onPress={_onPress}
        >
            <Text style={Styles.create}>Create</Text>
        </TouchableOpacity>
    );
}
