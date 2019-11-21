import React from 'react';
import { BadgeContainer as BadgeContainer, StyledBadge } from '../StyledComponents';

const Badge = ({ firstHalf, secondHalf }) => {
    return (
        <BadgeContainer>
            <StyledBadge half={firstHalf} />
            <StyledBadge half={secondHalf} />
        </BadgeContainer>
    );
}

export default Badge;
