import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Accordion from 'react-native-collapsible/Accordion';
import { MONTH_NAMES, getOrdinal } from '../../../common/utils/dates';
import { DateWrapper, Ordinal, StyledDate, StyledMonth, StyledYear } from '../../../common/StyledComponents';
import Badge from './Badge';

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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.name}>{activeIntimation.empName}</Text>
                <Badge firstHalf={'WFH'} secondHalf={'Leave'}/>
            </View>
            <Text style={styles.reason}>{activeIntimation.reason}</Text>
        </View>
    );
};

_renderContent = (toggle) => {
    if (!toggle)
        return null;

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
                markedDates={{
                    '2019-11-21': { dots: [{ key: 'WFH', color: 'green', borderColor: 'green' }, { key: 'Leave', color: 'red', borderColor: 'red' }] },
                    '2019-11-22': { dots: [{ key: 'WFO', color: 'grey',  borderColor: 'grey' }, { key: 'Leave', color: 'red',  borderColor: 'red' }] }
                }}
                markingType={'multi-dot'}
                theme={{
                    'stylesheet.day.multiDot': {
                        dot: {
                            width: 10,
                            height: 10,
                            marginTop: 1,
                            marginLeft: 1,
                            marginRight: 1,
                            borderRadius: 2,
                            opacity: 0
                        }
                    }
                }}
            />
        </View>
    );
};

export default ({ activeIntimations, lastModified, toggle }) => {

    const [activeSections, setActiveSections] = useState([]);
    let _lastModified = new Date(lastModified);

    return (
        <View style={{ marginBottom: 10, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
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
                renderContent={() => _renderContent(toggle)}
                onChange={setActiveSections}
                underlayColor={'white'}
            />
        </View>
    );
}
