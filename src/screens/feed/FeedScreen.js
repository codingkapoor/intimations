import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import shortid from 'shortid';
import SwitchSelector from "react-native-switch-selector";
import { TouchableOpacity } from 'react-native-gesture-handler';

import { SpinnerWrapper } from '../../common/StyledComponents';
import Section from './components/Section';
import NoActivity from './components/NoActivity';

const FeedScreen = ({ activeIntimations, pullToRefresh, fetchAll, fetchActiveIntimations, navigation }) => {

    const [switchSelectorState, setSwitchSelectorState] = useState({ toggle: false, toggleValue: '1' });

    useEffect(() => { fetchAll() }, []);

    onRefresh = () => fetchActiveIntimations();

    if (!activeIntimations[0] || activeIntimations[0].length === 0)
        return (
            <SpinnerWrapper>
                <WaveIndicator color='#000000' />
            </SpinnerWrapper>
        );

    let sections = Object.keys(activeIntimations[0]).sort((a, b) => { return new Date(a) - new Date(b) }).map((key, _) => {
        let intimations = (switchSelectorState.toggle === false) ?
            activeIntimations[0][key].filter(i => i.isToday) :
            activeIntimations[0][key].filter(i => i.isPlanned)

        return (intimations.length > 0) ?
            <Section key={shortid.generate()}
                activeIntimations={intimations}
                lastModified={key}
                toggle={switchSelectorState.toggle}
            /> : null;
    })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFEFE' }}>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 40, marginTop: 20 }}
                refreshControl={<RefreshControl progressViewOffset={20} refreshing={pullToRefresh} onRefresh={this.onRefresh} />}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                    <SwitchSelector
                        initial={0}
                        onPress={value => (value !== switchSelectorState.toggleValue) ? setSwitchSelectorState({ toggle: !switchSelectorState.toggle, toggleValue: value }) : null}
                        buttonColor={'#3A8BCF'}
                        hasPadding
                        style={{ width: 200 }}
                        height={38}
                        options={[
                            { label: 'Today', value: '1' },
                            { label: 'Planned ', value: '2' }
                        ]}
                    />
                    <View style={{ position: 'absolute', top: 8, right: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                            <FontAwesomeIcon icon={'pen'} size={22} color={'#3780BE'} />
                        </TouchableOpacity>
                    </View>
                </View>

                {sections.filter(s => s !== null).length === sections.length ? sections.length > 0 ? sections : <NoActivity /> : <NoActivity />}

            </ScrollView>
        </SafeAreaView>
    );
}

FeedScreen.navigationOptions = {
    header: null
}

export default FeedScreen;
