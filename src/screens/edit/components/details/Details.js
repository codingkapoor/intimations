import React from 'react';

import { DetailsWrapper, Ordinal, DateWrapper, StyledDate, StyledSeparator, Reason } from './StyledComponents';
import { getOrdinal } from '../../../../common/utils/dates';

const Details = ({ firstDate, lastDate, reason }) => {
    let first = firstDate.getDate();
    let last = lastDate.getDate();

    return (
        <DetailsWrapper>
            {
                first === last ?
                    <DateWrapper>
                        <StyledDate>{first} </StyledDate>
                        <Ordinal>{getOrdinal(first)} </Ordinal>
                    </DateWrapper> :
                    <DateWrapper>
                        <StyledDate>{first} </StyledDate>
                        <Ordinal>{getOrdinal(first)} </Ordinal>
                        <StyledSeparator> - </StyledSeparator>
                        <StyledDate>{last} </StyledDate>
                        <Ordinal>{getOrdinal(last)} </Ordinal>
                    </DateWrapper>
            }
            <Reason>{reason}</Reason>
        </DetailsWrapper>
    );
}

export default Details;
