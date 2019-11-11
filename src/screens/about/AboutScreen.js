import React, { Component } from 'react';
import _ from 'lodash';
import { Dimensions, Linking, Text, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderTitle } from './StyledComponents';
import { SpinnerWrapper } from '../../common/StyledComponents';
import { FlatList } from 'react-native-gesture-handler';
import FooterComponent from './components/FooterComponent';

class AboutScreen extends Component {
    componentDidMount() {
        this.props.fetchGithubContributors();
    }

    render() {
        let githubContributors = this.props.githubContributors;

        if (githubContributors.size === 0)
            return (
                <SpinnerWrapper>
                    <ActivityIndicator size="large" color="#000000" />
                </SpinnerWrapper>
            );

        return (
            <SafeAreaView style={{ flex: 1, wordWrap: 'break-word', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <HeaderTitle>Contributors</HeaderTitle>
                    <FlatList
                        data={githubContributors}
                        style={{ marginBottom: 15 }}
                        renderItem={({ item }) =>
                            <Text style={{ color: 'blue', paddingLeft: 10, fontSize: 18, marginBottom: 5 }}
                                onPress={() => Linking.openURL(`${item.html_url}`)}>
                                {item.login}
                            </Text>
                        }
                        flexGrow={0}
                        keyExtractor={item => item.login}
                    />

                    <HeaderTitle>Attributions</HeaderTitle>
                    <FlatList
                        data={githubContributors}
                        style={{ marginBottom: 15 }}
                        renderItem={({ item }) =>
                            <Text style={{ color: 'blue', paddingLeft: 10, fontSize: 18, marginBottom: 5 }}
                                onPress={() => Linking.openURL(`https://www.vecteezy.com/free-vector/husky`)}>
                                Husky Vectors by Vecteezy
                            </Text>
                        }
                        flexGrow={0}
                        keyExtractor={item => item.login}
                    />

                    <HeaderTitle>Report Issues</HeaderTitle>
                    <FlatList
                        data={githubContributors}
                        style={{ marginBottom: 15 }}
                        renderItem={({ item }) =>
                            <Text style={{ color: 'blue', paddingLeft: 10, fontSize: 18, marginBottom: 5 }}
                                onPress={() => Linking.openURL(`https://github.com/codingkapoor/simple-lms-mobile/issues`)}>
                                https://github.com/codingkapoor/simple-lms-mobile/issues
                            </Text>
                        }
                        flexGrow={0}
                        keyExtractor={item => item.login}
                    />

                    <HeaderTitle>Request Features/Enhancements</HeaderTitle>
                    <FlatList
                        data={githubContributors}
                        style={{ marginBottom: 15 }}
                        renderItem={({ item }) =>
                            <Text style={{ color: 'blue', paddingLeft: 10, fontSize: 18, marginBottom: 5 }}
                                onPress={() => Linking.openURL(`https://github.com/codingkapoor/simple-lms-mobile/issues`)}>
                                https://github.com/codingkapoor/simple-lms-mobile/issues
                            </Text>
                        }
                        flexGrow={0}
                        keyExtractor={item => item.login}
                    />
                </View>

                <FooterComponent/>
            </SafeAreaView>
        );
    };
}

AboutScreen.navigationOptions = {
    title: 'About',
    headerTintColor: '#393939',
    headerTitleStyle: { width: Dimensions.get('window').width },
    tabBarVisible: 'false'
}

export default AboutScreen;
