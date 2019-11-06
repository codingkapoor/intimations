import React from 'react';
import { Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const TodaysIntimationsScreen = () => {
    return (
        <Text>Today</Text>
    );
};

TodaysIntimationsScreen.navigationOptions = {
    title: 'Today',
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon='calendar-day' size={28} color={'#0977D3'} />
            : <FontAwesomeIcon icon='calendar-day' size={28} />
        return i;
    }
}

export default TodaysIntimationsScreen;
