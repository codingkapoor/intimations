import React from 'react';
import { HolidayContainer, DayContainer, Day, Date, OccasionContainer, Occasion } from '../../../screens/feed/StyledComponents';

const Holiday = ({ day, date, occasion }) => {
    return (
        <HolidayContainer>
            <DayContainer>
                <Day>{day}</Day>
                <Date>{date}</Date>
            </DayContainer>
            <OccasionContainer>
                <Occasion>{occasion}</Occasion>
            </OccasionContainer>
        </HolidayContainer>
    );
}

export default Holiday;
