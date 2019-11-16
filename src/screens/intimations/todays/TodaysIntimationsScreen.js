import React from 'react';
import { Text, ScrollView, RefreshControl } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import { SpinnerWrapper } from '../../../common/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView } from 'react-native-safe-area-context';

const TodaysIntimationsScreen = ({ todaysIntimations, pullToRefresh, fetchActiveIntimations }) => {
    onRefresh = () => fetchActiveIntimations();

    if (!todaysIntimations)
        return (
            <SpinnerWrapper>
                <WaveIndicator color="#000000" />
            </SpinnerWrapper>
        );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView refreshControl={<RefreshControl progressViewOffset={20} refreshing={pullToRefresh} onRefresh={onRefresh} />} >
                <Text>Today</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

TodaysIntimationsScreen.navigationOptions = {
    title: 'Today',
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon='calendar-day' size={25} color={'#0977D3'} />
            : <FontAwesomeIcon icon='calendar-day' size={25} color={'#393939'} />
        return i;
    }
}

export default TodaysIntimationsScreen;
