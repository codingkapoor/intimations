import React, { useState } from 'react';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import { SpinnerWrapper } from '../../common/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import SectionComponent from './components/SectionComponent';
import shortid from 'shortid';
import SwitchToggle from 'react-native-switch-toggle';

const FeedScreen = ({ activeIntimations, pullToRefresh, fetchActiveIntimations }) => {
    const [toggle, switchToggle] = useState(false);

    const onRefresh = () => fetchActiveIntimations();

    if (!activeIntimations || activeIntimations.length === 0)
        return (
            <SpinnerWrapper>
                <WaveIndicator color="#000000" />
            </SpinnerWrapper>
        );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFEFE' }}>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 20, marginTop: 10 }}
                refreshControl={<RefreshControl progressViewOffset={20} refreshing={pullToRefresh} onRefresh={onRefresh} />}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                    <Text style={{ color: "black", fontSize: 17, paddingRight: 12 }}>Today</Text>
                    <SwitchToggle
                        switchOn={toggle}
                        onPress={() => switchToggle(!toggle)}
                        circleColorOn='#3A8BCF'
                    />
                    <Text style={{ color: "black", fontSize: 17, paddingLeft: 12 }}>Planned</Text>
                </View>

                {Object.keys(activeIntimations).map((key, _) => {
                    let intimations = (toggle === false) ? activeIntimations[key].filter(i => i.isToday) : activeIntimations[key].filter(i => i.isPlanned)

                    return (intimations.length > 0) ?
                        <SectionComponent key={shortid.generate()}
                            activeIntimations={intimations}
                            lastModified={key}
                            toggle={toggle}
                        /> : null;
                })}

            </ScrollView>
        </SafeAreaView>
    );
};

FeedScreen.navigationOptions = {
    title: 'Feed',
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon={'bell'} size={29} color={'#3780BE'} />
            : <FontAwesomeIcon icon={'bell'} size={29} color={'#393939'} />
        return i;
    }
}

export default FeedScreen;
