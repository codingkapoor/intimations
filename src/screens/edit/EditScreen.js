import React from 'react';
import { Calendar } from 'react-native-calendars';
import { TextInput, Text, ScrollView, Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EditScreen = () => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFEFE' }}>
            <ScrollView style={{ flex: 1, paddingTop: 0 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                    <Calendar
                        style={
                            {
                                width: 370,
                                borderWidth: 1,
                                borderColor: '#D8DADA',
                                borderRadius: 10,
                                paddingBottom: 15
                            }
                        }
                    />

                    <TextInput
                        style={
                            {
                                width: 370,
                                height: 100,
                                borderColor: 'gray',
                                borderRadius: 10,
                                borderColor: '#D8DADA',
                                borderWidth: 1,
                                marginTop: 30,
                                padding: 5,
                                paddingLeft: 12,
                                color: '#595959',
                                fontSize: 16
                            }
                        }
                        placeholder='Reason...'
                        multiline
                        textAlignVertical={'top'}
                    >
                    </TextInput>

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
