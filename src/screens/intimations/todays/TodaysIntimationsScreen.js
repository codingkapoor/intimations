import React from 'react';
import { Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView } from 'react-native-safe-area-context';

const TodaysIntimationsScreen = () => {
    return (
        <SafeAreaView>
            <Text>Today</Text>
        </SafeAreaView>
    );
};

TodaysIntimationsScreen.navigationOptions = {
    title: 'Today',
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon='calendar-day' size={25} color={'#0977D3'} />
            : <FontAwesomeIcon icon='calendar-day' size={25} color={'#393939'} />
        return i;
    }
}

export default TodaysIntimationsScreen;
