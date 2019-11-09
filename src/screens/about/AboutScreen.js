import React from 'react';
import { Dimensions } from 'react-native';
import SafeAreaView from '../../common/SafeAreaView';

const AboutScreen = () => {
    return (
        <SafeAreaView></SafeAreaView>
    );
};

AboutScreen.navigationOptions = {
    title: 'About',
    headerTintColor: '#393939',
    headerTitleStyle: { width: Dimensions.get('window').width },
    tabBarVisible: 'false'
}

export default AboutScreen;
