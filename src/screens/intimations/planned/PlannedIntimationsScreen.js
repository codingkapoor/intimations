import React, { useState } from 'react';
import { Text, ScrollView, RefreshControl, View, StyleSheet } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import { SpinnerWrapper } from '../../../common/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';
import Accordion from 'react-native-collapsible/Accordion';

const PlannedIntimationsScreen = ({ activeIntimations, pullToRefresh, fetchActiveIntimations }) => {
    const [activeSections, setActiveSections] = useState([]);

    onRefresh = () => fetchActiveIntimations();

    if (!activeIntimations)
        return (
            <SpinnerWrapper>
                <WaveIndicator color="#000000" />
            </SpinnerWrapper>
        );

    _renderHeader = activeIntimation => {
        return (
            <View style={styles.container}>
                <Text style={styles.name}>{activeIntimation.empName}</Text>
                <Text style={styles.reason}>{activeIntimation.reason}</Text>
            </View>
        );
    };

    _renderContent = () => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Calendar
                    style={{
                        width: 370,
                        marginTop: 20,
                        borderWidth: 1,
                        borderColor: '#D8DADA',
                        borderRadius: 10
                    }}

                />
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FCFCFC' }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20, marginTop: 10 }} refreshControl={<RefreshControl progressViewOffset={20} refreshing={pullToRefresh} onRefresh={onRefresh} />} >
                <Accordion
                    sections={activeIntimations}
                    activeSections={activeSections}
                    renderHeader={_renderHeader}
                    renderContent={_renderContent}
                    onChange={setActiveSections}
                    underlayColor={'white'}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        paddingLeft: 15,
        borderWidth: 1,
        borderColor: '#D8DADA',
        borderRadius: 10,
        backgroundColor: 'white'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 2
    },
    reason: {
        fontSize: 16,
        paddingBottom: 5,
        marginBottom: 5,
        marginTop: 8
    }
});

PlannedIntimationsScreen.navigationOptions = {
    title: 'Feed',
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon={'bell'} size={29} color={'#3780BE'} />
            : <FontAwesomeIcon icon={'bell'} size={29} color={'#393939'} />
        return i;
    }
}

export default PlannedIntimationsScreen;
