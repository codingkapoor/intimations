import React, { Component } from 'react';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import { SpinnerWrapper } from '../../common/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import Section from './components/Section';
import shortid from 'shortid';
import SwitchSelector from "react-native-switch-selector";

class FeedScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { toggle: true };
    }

    componentDidMount() {
        this.props.fetchEmployeeDetails(11);
        this.props.fetchActiveIntimations();
    }

    onRefresh = () => this.props.fetchActiveIntimations();

    render() {
        if (!this.props.activeIntimations || this.props.activeIntimations.length === 0)
            return (
                <SpinnerWrapper>
                    <WaveIndicator color="#000000" />
                </SpinnerWrapper>
            );

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFEFE' }}>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 20, marginTop: 10 }}
                    refreshControl={<RefreshControl progressViewOffset={20} refreshing={this.props.pullToRefresh} onRefresh={this.onRefresh} />}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                        <SwitchSelector
                            initial={1}
                            onPress={value => this.setState({ toggle: !this.state.toggle })}
                            buttonColor={'#3A8BCF'}
                            hasPadding
                            style={{ width: 200 }}
                            height={38}
                            options={[
                                { label: "Today", value: "1" },
                                { label: "Planned ", value: "2" }
                            ]}
                        />
                    </View>

                    {Object.keys(this.props.activeIntimations).map((key, _) => {
                        let intimations = (this.state.toggle === false) ?
                            this.props.activeIntimations[key].filter(i => i.isToday) :
                            this.props.activeIntimations[key].filter(i => i.isPlanned)

                        return (intimations.length > 0) ?
                            <Section key={shortid.generate()}
                                activeIntimations={intimations}
                                lastModified={key}
                                toggle={this.state.toggle}
                            /> : null;
                    })}

                </ScrollView>
            </SafeAreaView>
        );
    }
}

FeedScreen.navigationOptions = {
    title: '',
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon={'bell'} size={29} color={'#3780BE'} />
            : <FontAwesomeIcon icon={'bell'} size={29} color={'#393939'} />
        return i;
    }
}

export default FeedScreen;
