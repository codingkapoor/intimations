import React, { useRef } from 'react';
import { Calendar } from 'react-native-calendars';
import { TextInput, Text, ScrollView, Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HolidaysContainer from '../../common/components/holidays/HolidaysContainer';
import SwitchSelector from "react-native-switch-selector";
import { Reason } from './StyledComponents';

const EditScreen = () => {

    const holidaysRef = useRef();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFEFE' }}>
            <ScrollView style={{ flex: 1, paddingTop: 0 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <SwitchSelector
                        initial={1}
                        // onPress={value => this.setState({ toggle: !this.state.toggle })}
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
                    <Calendar
                        current={'2019-12-01'}
                        style={
                            {
                                width: 370,
                                borderWidth: 1,
                                borderColor: '#D8DADA',
                                borderRadius: 10,
                                paddingBottom: 15,
                                marginTop: 15
                            }
                        }
                        hideExtraDays={true}
                        markedDates={{
                            '2019-11-01': { marked: true, disabled: true, disableTouchEvent: true }
                        }}
                    />

                    <HolidaysContainer ref={holidaysRef} />

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
