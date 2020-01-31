import React from 'react';
import { Text } from 'react-native';

import { DetailsWrapper } from './StyledComponents';
import { Ordinal, DateWrapper, StyledDate, StyledSeparator } from '../../../../common/StyledComponents';
import { getOrdinal } from '../../../../common/utils/dates';

const Details = ({ firstDate, lastDate, reason }) => {
    let first = firstDate.getDate();
    let last = lastDate.getDate();

    return (
        <DetailsWrapper>
            <DateWrapper>
                <StyledDate style={{ fontWeight: 'bold' }}>{first} </StyledDate>
                <Ordinal style={{ fontWeight: 'bold' }}>{getOrdinal(first)} </Ordinal>
                <StyledSeparator style={{ fontWeight: 'bold' }}> - </StyledSeparator>
                <StyledDate style={{ fontWeight: 'bold' }}>{last} </StyledDate>
                <Ordinal style={{ fontWeight: 'bold' }}>{getOrdinal(last)} </Ordinal>
            </DateWrapper>
            <Text>{reason}</Text>
        </DetailsWrapper>
    );
}

export default Details;
