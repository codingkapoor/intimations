import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditIntimationScreen = () => {

    return (
        <SafeAreaView style={{ alignItems: 'center' }}>
            <Calendar
                style={
                    {
                        marginTop: 30,
                        width: 350,
                        borderWidth: 1,
                        borderColor: '#D8DADA',
                        borderRadius: 10
                    }
                }
            />
        </SafeAreaView>
    );
};

EditIntimationScreen.navigationOptions = {
    title: 'Edit',
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon='pen-square' size={25} color={'#0977D3'} />
            : <FontAwesomeIcon icon='pen-square' size={25} color={'#393939'} />
        return i;
    }
}

export default EditIntimationScreen;
