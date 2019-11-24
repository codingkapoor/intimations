import styled from 'styled-components/native';

export const HolidayWrapper = styled.View`
    width: 370; 
    flex-direction: row; 
    align-items: center; 
    justify-content: flex-start; 
    margin-top: 10;
`;

export const DayWrapper = styled.View`
    width: 25;
`;

export const Day = styled.Text`
    font-size: 10; 
    color: #999898;
`;

export const Date = styled.Text`
    font-size: 16; 
    font-weight: bold;
`;

export const OccasionWrapper = styled.View`
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
`;
