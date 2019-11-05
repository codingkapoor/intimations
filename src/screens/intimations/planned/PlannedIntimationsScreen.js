import React from 'react';
import { Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const PlannedIntimationsScreen = () => {
    return (
        <Text>Planned</Text>
    );
};

PlannedIntimationsScreen.navigationOptions = {
    title: 'Planned',
    tabBarIcon: <FontAwesomeIcon icon={['fab', 'telegram-plane']} size={22} />
}

export default PlannedIntimationsScreen;
