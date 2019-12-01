import React, { useEffect, useState } from 'react';
import { ScrollView, Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwitchSelector from "react-native-switch-selector";

import CalendarContainer from './components/calendar/CalendarContainer';
import { Reason } from './StyledComponents';
import { ToggleValue } from './Constants';
import Edit from './components/Edit';

const EditScreen = ({ inactiveIntimations, stageIntimation, fetchInactiveIntimations, updateStageIntimation }) => {

    const [toggleValue, setToggleValue] = useState(ToggleValue.WFH);

    useEffect(() => {
        fetchInactiveIntimations();
    }, []);

    const _onChangeText = text => {
        updateStageIntimation({
            'reason': text,
            'requests': stageIntimation.requests
        });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFEFE' }}>
            <ScrollView style={{ flex: 1, paddingTop: 0 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <SwitchSelector
                        initial={1}
                        onPress={value => (value !== toggleValue) ? setToggleValue(value) : null}
                        buttonColor={'#3A8BCF'}
                        hasPadding
                        style={{ width: 250, marginBottom: 10 }}
                        height={38}
                        options={[
                            { label: 'Office ', value: ToggleValue.OFFICE },
                            { label: 'WFH ', value: ToggleValue.WFH },
                            { label: 'Leave ', value: ToggleValue.LEAVE }
                        ]}
                    />

                    <CalendarContainer
                        inactiveRequests={inactiveIntimations.map(ii => ii.requests).flatMap(i => i)}
                        toggleValue={toggleValue}
                    />

                    <Reason
                        placeholder='Reason...'
                        multiline
                        textAlignVertical={'top'}
                        value={stageIntimation.reason ? stageIntimation.reason : ''}
                        onChangeText={_onChangeText}
                    />

                    <Edit />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

EditScreen.navigationOptions = {
    title: 'Edit',
    headerTintColor: '#393939',
    headerTitleStyle: { width: Dimensions.get('window').width },
    tabBarVisible: 'false'
}

export default EditScreen;
