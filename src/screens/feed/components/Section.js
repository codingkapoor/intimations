import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import { MONTH_NAMES, getOrdinal } from '../../../common/utils/dates';
import { DateWrapper, Ordinal, StyledDate, StyledMonth, StyledYear } from '../../../common/StyledComponents';
import HolidaysContainer from '../../../common/components/holidays/HolidaysContainer';
import { SectionWrapper, SectionDateWrapper, HeaderWrapper, TitleWrapper, Name, Reason } from '../StyledComponents';
import Badge from './Badge';
import CalendarContainer from './calendar/CalendarContainer';

const _renderHeader = activeIntimation => {
    return (
        <HeaderWrapper>
            <TitleWrapper>
                <Name>{activeIntimation.empName}</Name>
                {activeIntimation.today ? <Badge firstHalf={activeIntimation.today.firstHalf} secondHalf={activeIntimation.today.secondHalf} /> : null}
            </TitleWrapper>
            <Reason>{activeIntimation.reason}</Reason>
        </HeaderWrapper>
    );
};

const _renderContent = (activeIntimation, toggle) => {
    if (!toggle)
        return null;

    return (
        <View style={{ alignItems: 'center' }}>
            <CalendarContainer activeIntimation={activeIntimation} />
        </View>
    );
};

const Section = ({ activeIntimations, lastModified, toggle }) => {

    const [activeSections, setActiveSections] = useState([]);
    let _lastModified = new Date(lastModified);

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
                renderContent={activeIntimation => _renderContent(activeIntimation, toggle)}
                onChange={setActiveSections}
                underlayColor={'white'}
            />
        </SectionWrapper>
    );
}

export default Section;
