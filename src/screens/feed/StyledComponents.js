import styled from 'styled-components/native';
import { BadgeColor } from '../../common/Constants';

export const SectionWrapper = styled.View`
    margin-bottom: 10; 
    justify-content: center;
`;

export const SectionDateWrapper = styled.View`
    flex-direction: row; 
    justify-content: center; 
    align-items: center; 
    margin-top: 20px;
`;

export const BadgeWrapper = styled.View`
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

export const HolidayContainer = styled.View`
    width: 370; 
    flex-direction: row; 
    align-items: center; 
    justify-content: flex-start; 
    margin-top: 20;
`;

export const DayContainer = styled.View``;

export const Day = styled.Text`
    font-size: 12; 
    color: #999898;
`;

export const Date = styled.Text`
    font-size: 18; 
    font-weight: bold;
`;

export const OccasionContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 30;
    background-color: #E5B001;
    border-radius: 5;
    margin-left: 10;
`;

export const Occasion = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
`;
