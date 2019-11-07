import React from 'react';
import { Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const EditIntimationScreen = () => {
    return (
        <Text>Edit</Text>
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
