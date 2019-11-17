import React from 'react';
import { Text, RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import { SpinnerWrapper } from '../../../common/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import SegmentedControlTab from "react-native-segmented-control-tab";

const TodaysIntimationsScreen = ({ todaysIntimations, pullToRefresh, fetchActiveIntimations }) => {
    onRefresh = () => fetchActiveIntimations();

    if (!todaysIntimations)
        return (
            <SpinnerWrapper>
                <WaveIndicator color="#000000" />
            </SpinnerWrapper>
        );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FCFCFC' }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }} refreshControl={<RefreshControl progressViewOffset={20} refreshing={pullToRefresh} onRefresh={onRefresh} />} >
                <SegmentedControlTab
                    tabsContainerStyle={styles.tabsContainerStyle}
                    tabStyle={styles.tabStyle}
                    tabTextStyle={styles.tabTextStyle}
                    activeTabStyle={styles.activeTabStyle}
                    values={["All", "Wfh", "Leave"]}
                />
                <View style={styles.container}>
                    <Text style={styles.name}>Pramod Sridharamurthy</Text>
                    <Text style={styles.reason}>I need to attend to some work at home.</Text>
                    <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, marginTop: 5, marginBottom: 5 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.wfh}>Wfh</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.name}>Shivam Kapoor</Text>
                    <Text style={styles.reason}>I need to attend to some work at home. I need to attend to some work at home. I need to attend to some work at home. I need to attend to some work at home.</Text>
                    <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, marginTop: 5, marginBottom: 5 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.wfh}>Wfh</Text>
                        <Text style={styles.leave}>Leave</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.name}>Bharath</Text>
                    <Text style={styles.reason}>I need to attend to some work at home.</Text>
                    <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, marginTop: 5, marginBottom: 5 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.leave}>Leave</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.name}>Anish Tomer</Text>
                    <Text style={styles.reason}>I need to attend to some work at home.</Text>
                    <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, marginTop: 5, marginBottom: 5 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.leave}>Leave</Text>
                        <Text style={styles.wfh}>Wfh</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.name}>Pramod Sridharamurthy</Text>
                    <Text style={styles.reason}>I need to attend to some work at home.</Text>
                    <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, marginTop: 5, marginBottom: 5 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.wfh}>Wfh</Text>
                        <Text style={styles.leave}>Leave</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.name}>Shivam Kapoor</Text>
                    <Text style={styles.reason}>I need to attend to some work at home. I need to attend to some work at home. I need to attend to some work at home. I need to attend to some work at home.</Text>
                    <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, marginTop: 5, marginBottom: 5 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.leave}>Leave</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.name}>Bharath</Text>
                    <Text style={styles.reason}>I need to attend to some work at home.</Text>
                    <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, marginTop: 5, marginBottom: 5 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.leave}>Leave</Text>
                        <Text style={styles.wfh}>Wfh</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.name}>Anish Tomer</Text>
                    <Text style={styles.reason}>I need to attend to some work at home.</Text>
                    <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, marginTop: 5, marginBottom: 5 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.wfh}>Wfh</Text>
                    </View>
                </View>
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
    tabsContainerStyle: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },
    tabStyle: {
        borderColor: '#D8DADA',
        paddingBottom: 8,
        paddingTop: 8
    },
    tabTextStyle: {
        color: '#393939',
        fontSize: 15
    },
    activeTabStyle: {
        backgroundColor: '#3780BE',
        borderWidth: 0
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 2
    },
    reason: {
        fontSize: 16,
        paddingBottom: 5,
        marginBottom: 5
    },
    wfh: {
        backgroundColor: '#78C12B',
        color: 'white',
        borderRadius: 5,
        borderColor: '#D8DADA',
        padding: 5,
        paddingHorizontal: 30,
        marginTop: 7,
        marginRight: 10
    },
    leave: {
        backgroundColor: '#D12219',
        color: 'white',
        borderRadius: 5,
        borderColor: '#D8DADA',
        padding: 5,
        paddingHorizontal: 30,
        marginTop: 7,
        marginRight: 10

    }
})


TodaysIntimationsScreen.navigationOptions = {
    title: 'Today',
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon='calendar-day' size={25} color={'#3780BE'} />
            : <FontAwesomeIcon icon='calendar-day' size={25} color={'#393939'} />
        return i;
    }
}

export default TodaysIntimationsScreen;
