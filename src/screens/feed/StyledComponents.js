import styled from 'styled-components/native';

const BadgeColor = {
    WHO: 'grey',
    WFH: 'green',
    Leave: 'red'
};

export const BadgeContainer = styled.View`
    flex-direction: row; 
    align-items: center;
    justify-content: center;
`;

export const StyledBadge = styled.View`
    width: 10;
    height: 10;
    border-radius: 2px;
    border-width: 1px;
    border-color: ${props => BadgeColor[props.half]}; 
    margin: 1px;
    background-color: ${props => BadgeColor[props.half]};
`;
