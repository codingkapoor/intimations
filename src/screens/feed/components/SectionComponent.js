import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Accordion from 'react-native-collapsible/Accordion';
import { WaveIndicator } from 'react-native-indicators';
import { MONTH_NAMES, getOrdinal } from '../../../common/utils/dates';
import { SpinnerWrapper, DateWrapper, Ordinal, StyledDate, StyledMonth, StyledYear } from '../../../common/StyledComponents';

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

export default ({ activeIntimations, lastModified }) => {

    const [activeSections, setActiveSections] = useState([]);
    let _lastModified = new Date(lastModified);

    return (
        <View style={{ marginBottom: 10, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <StyledMonth> {MONTH_NAMES[_lastModified.getMonth()]} </StyledMonth>
                <DateWrapper>
                    <StyledDate>{_lastModified.getDate()}</StyledDate>
                    <Ordinal>{getOrdinal(_lastModified.getDate())}</Ordinal>
                </DateWrapper>
                <StyledYear>, {_lastModified.getFullYear()}</StyledYear>
            </View>

            <Accordion
                sections={activeIntimations}
                activeSections={activeSections}
                renderHeader={_renderHeader}
                renderContent={_renderContent}
                onChange={setActiveSections}
                underlayColor={'white'}
            />
        </View>
    );
}
