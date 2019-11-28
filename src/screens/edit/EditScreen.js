import React from 'react';
import { Text, ScrollView, Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwitchSelector from "react-native-switch-selector";

import CalendarContainer from './components/calendar/CalendarContainer';
import { Reason } from './StyledComponents';

const EditScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFEFE' }}>
            <ScrollView style={{ flex: 1, paddingTop: 0 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <SwitchSelector
                        initial={1}
                        buttonColor={'#3A8BCF'}
                        hasPadding
                        style={{ width: 250, marginBottom: 10 }}
                        height={38}
                        options={[
                            { label: "Office ", value: "1" },
                            { label: "WFH ", value: "2" },
                            { label: "Leave ", value: "3" }
                        ]}
                    />

                    <CalendarContainer />

                    <Reason
                        placeholder='Reason...'
                        multiline
                        textAlignVertical={'top'}
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
