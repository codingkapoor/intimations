import React, { Component } from 'react';
import _ from 'lodash';
import { Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from './components/Footer';
import Section from './components/Section';
import sections from './about.json';
import shortid from 'shortid';
import Asset from './components/Asset';

class AboutScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, wordWrap: 'break-word', justifyContent: 'space-between', backgroundColor: '#FEFEFE' }}>
                <View>
                    {sections.map(e => { return <Section key={shortid.generate()} headerTitle={e.headerTitle} data={e.data} /> })}
                    <Asset title='Holidays' slug='holidays' />
                    <Asset title='WFH Policy' slug='wfh-policy' />
                    <Asset title='Leave Policy' slug='leave-policy' />
                </View>
                <Footer />
            </SafeAreaView>
        );
    };
}

AboutScreen.navigationOptions = {
    title: 'About',
    headerTintColor: '#393939',
    headerTitleStyle: {
        width: Dimensions.get('window').width,
        fontFamily: 'open-sans-light',
        fontWeight: '200'
    },
    tabBarVisible: 'false'
}

export default AboutScreen;
