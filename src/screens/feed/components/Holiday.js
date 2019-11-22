import React from 'react';
import { OccasionContainer, Occasion, HolidayContainer, DayContainer, Day, Date } from '../StyledComponents';

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
