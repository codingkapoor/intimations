import React from 'react';

import { HolidayWrapper, DayWrapper, Day, Date, OccasionWrapper, Occasion } from './StyledComponents';

const Holiday = ({ day, date, occasion }) => {
    return (
        <HolidayWrapper>
            <DayWrapper>
                <Day>{day}</Day>
                <Date>{date}</Date>
            </DayWrapper>
            <OccasionWrapper>
                <Occasion>{occasion}</Occasion>
            </OccasionWrapper>
        </HolidayWrapper>
    );
}

export default Holiday;
