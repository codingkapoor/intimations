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
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon={['fab', 'telegram-plane']} size={27} color={'#0977D3'} />
            : <FontAwesomeIcon icon={['fab', 'telegram-plane']} size={27} />
        return i;
    }
}

export default PlannedIntimationsScreen;
