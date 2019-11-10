import React from 'react';
import { Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView } from 'react-native-safe-area-context';

const PlannedIntimationsScreen = () => {
    return (
        <SafeAreaView>
            <Text>Planned</Text>
        </SafeAreaView>
    );
};

PlannedIntimationsScreen.navigationOptions = {
    title: 'Planned',
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon={['fab', 'telegram-plane']} size={27} color={'#0977D3'} />
            : <FontAwesomeIcon icon={['fab', 'telegram-plane']} size={27} color={'#393939'} />
        return i;
    }
}

export default PlannedIntimationsScreen;
