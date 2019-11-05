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
    tabBarIcon: <FontAwesomeIcon icon='edit' size={22} />
}

export default EditIntimationScreen;
