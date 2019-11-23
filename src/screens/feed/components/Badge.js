import React from 'react';
import { BadgeWrapper as BadgeWrapper, StyledBadge } from '../StyledComponents';

const Badge = ({ firstHalf, secondHalf }) => {
    return (
        <BadgeWrapper>
            <StyledBadge half={firstHalf} />
            <StyledBadge half={secondHalf} />
        </BadgeWrapper>
    );
}

export default Badge;
