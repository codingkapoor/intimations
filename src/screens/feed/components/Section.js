import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Accordion from 'react-native-collapsible/Accordion';
import { MONTH_NAMES, getOrdinal } from '../../../common/utils/dates';
import { DateWrapper, Ordinal, StyledDate, StyledMonth, StyledYear } from '../../../common/StyledComponents';
import Badge from './Badge';
import HolidaysContainer from '../../../common/components/holidays/HolidaysContainer';
import { SectionWrapper, SectionDateWrapper } from '../StyledComponents';

_renderHeader = activeIntimation => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.name}>{activeIntimation.empName}</Text>
                {activeIntimation.today ? <Badge firstHalf={activeIntimation.today.firstHalf} secondHalf={activeIntimation.today.secondHalf} /> : null}
            </View>
            <Text style={styles.reason}>{activeIntimation.reason}</Text>
        </View>
    );
};

_renderContent = (activeIntimation, toggle, holidaysRef) => {
    if (!toggle)
        return null;

    return (
        <View style={{ alignItems: 'center' }}>
            <Calendar
                style={styles.calendar}
                onMonthChange={e => holidaysRef.current.updateMonthYear(e.month, e.year)}
                markedDates={activeIntimation.markedDates}
                markingType={'multi-dot'}
                theme={{
                    'stylesheet.day.multiDot': {
                        dot: {
                            width: 8,
                            height: 8,
                            marginTop: 1,
                            marginLeft: 1,
                            marginRight: 1,
                            borderRadius: 2,
                            opacity: 0
                        }
                    }
                }}
            />
            <HolidaysContainer ref={holidaysRef} />
        </View>
    );
};

const Section = ({ activeIntimations, lastModified, toggle }) => {

    const [activeSections, setActiveSections] = useState([]);
    let _lastModified = new Date(lastModified);

    const holidaysRef = useRef();

    return (
        <SectionWrapper>
            <SectionDateWrapper>
                <StyledMonth> {MONTH_NAMES[_lastModified.getMonth()]} </StyledMonth>
                <DateWrapper>
                    <StyledDate>{_lastModified.getDate()}</StyledDate>
                    <Ordinal>{getOrdinal(_lastModified.getDate())}</Ordinal>
                </DateWrapper>
                <StyledYear>, {_lastModified.getFullYear()}</StyledYear>
            </SectionDateWrapper>

            <Accordion
                sections={activeIntimations}
                activeSections={activeSections}
                renderHeader={_renderHeader}
                renderContent={activeIntimation => _renderContent(activeIntimation, toggle, holidaysRef)}
                onChange={setActiveSections}
                underlayColor={'white'}
            />
        </SectionWrapper>
    );
}

const styles = StyleSheet.create({

    calendar: {
        width: 370,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#D8DADA',
        borderRadius: 10,
        paddingBottom: 15
    },
    
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

export default Section;
