import React, { useEffect, useState } from 'react';
import { Text, ScrollView, Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwitchSelector from "react-native-switch-selector";

import CalendarContainer from './components/calendar/CalendarContainer';
import { Reason } from './StyledComponents';
import { OFFICE, WFH, LEAVE } from './toggleValues';

const EditScreen = ({ inactiveIntimations, stageIntimation, fetchInactiveIntimations, updateStageIntimation }) => {

    const [toggleValue, setToggleValue] = useState(WFH);

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
                            { label: 'Office ', value: OFFICE },
                            { label: 'WFH ', value: WFH },
                            { label: 'Leave ', value: LEAVE }
                        ]}
                    />

                    <CalendarContainer
                        inactiveRequests={inactiveIntimations.map(ii => ii.requests).flatMap(i => i)}
                        stageRequests={stageIntimation.requests ? stageIntimation.requests : []}
                        toggleValue={toggleValue}
                    />

                    <Reason
                        placeholder='Reason...'
                        multiline
                        textAlignVertical={'top'}
                        value={stageIntimation.reason ? stageIntimation.reason : ''}
                        onChangeText={_onChangeText}
                    />

                    <TouchableOpacity
                        style={
                            {
                                alignItems: 'center',
                                backgroundColor: '#2282D3',
                                padding: 20,
                                width: 200,
                                borderRadius: 3,
                                marginTop: 30,
                                marginBottom: 20
                            }
                        }
                    >
                        <Text style={{ color: 'white', fontSize: 16 }}>Create</Text>
                    </TouchableOpacity>
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
