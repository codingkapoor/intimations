import React, { Component } from 'react';
import _ from 'lodash';
import { Dimensions, View } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SpinnerWrapper } from '../../common/StyledComponents';
import Footer from './components/Footer';
import Section from './components/Section';
import sections from './about.json';
import shortid from 'shortid';

class AboutScreen extends Component {
    componentDidMount() {
        this.props.fetchGithubContributors();
    }

    render() {
        let githubContributors = this.props.githubContributors;

        if (githubContributors.size === 0)
            return (
                <SpinnerWrapper>
                    <WaveIndicator color="#000000" />
                </SpinnerWrapper>
            );

        return (
            <SafeAreaView style={{ flex: 1, wordWrap: 'break-word', justifyContent: 'space-between', backgroundColor: '#FEFEFE' }}>
                <View>
                    <Section headerTitle='Contributors' data={_redefineContributorsDataKeys(githubContributors)} />
                    {sections.map(e => { return <Section key={shortid.generate()} headerTitle={e.headerTitle} data={e.data} /> })}
                </View>

                <Footer />
            </SafeAreaView>
        );
    };
}

const _redefineContributorsDataKeys = data => {
    var keyMap = {
        login: "title",
        html_url: "url"
    };

    return data.map(i => _.mapKeys(i, function (value, key) {
        return keyMap[key];
    }));
};

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
