import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import { SpinnerWrapper } from '../../common/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import SectionComponent from './components/SectionComponent';

const FeedScreen = ({ activeIntimations, pullToRefresh, fetchActiveIntimations }) => {
    onRefresh = () => fetchActiveIntimations();

    if (!activeIntimations)
        return (
            <SpinnerWrapper>
                <WaveIndicator color="#000000" />
            </SpinnerWrapper>
        );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FCFCFC' }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20, marginTop: 10 }} refreshControl={<RefreshControl progressViewOffset={20} refreshing={pullToRefresh} onRefresh={onRefresh} />} >
                <SectionComponent
                    activeIntimations={activeIntimations[Object.keys(activeIntimations)[0]]}
                    lastModified={Object.keys(activeIntimations)[0]}
                />
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
