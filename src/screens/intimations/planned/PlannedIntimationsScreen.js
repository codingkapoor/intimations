import React from 'react';
import { Text, ScrollView, RefreshControl } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import { SpinnerWrapper } from '../../../common/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView } from 'react-native-safe-area-context';

const PlannedIntimationsScreen = ({ activeIntimations, pullToRefresh, fetchActiveIntimations }) => {
    onRefresh = () => fetchActiveIntimations();

    if (!activeIntimations)
        return (
            <SpinnerWrapper>
                <WaveIndicator color="#000000" />
            </SpinnerWrapper>
        );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView refreshControl={<RefreshControl progressViewOffset={20} refreshing={pullToRefresh} onRefresh={onRefresh} />} >
                <Text>Planned</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

PlannedIntimationsScreen.navigationOptions = {
    title: 'Planned',
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon={['fab', 'telegram-plane']} size={27} color={'#3780BE'} />
            : <FontAwesomeIcon icon={['fab', 'telegram-plane']} size={27} color={'#393939'} />
        return i;
    }
}

export default PlannedIntimationsScreen;
