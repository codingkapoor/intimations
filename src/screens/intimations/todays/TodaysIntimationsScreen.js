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
    tabBarIcon: <FontAwesomeIcon icon='calendar-day' size={20} />
}

export default TodaysIntimationsScreen;
