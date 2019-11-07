import React, { Component } from 'react';
import { Text, Dimensions, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const AboutScreen = () => {
    return (
        <Text></Text>
    );
};

AboutScreen.navigationOptions = {
    title: 'About',
    headerTintColor: '#393939',
    headerTitleStyle: { width: Dimensions.get('window').width },
    tabBarVisible: 'false'
}

export default AboutScreen;
