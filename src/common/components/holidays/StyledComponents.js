import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const HolidayWrapper = styled.View`
    width: ${wp('90%')}; 
    flex-direction: row; 
    align-items: center; 
    justify-content: flex-start; 
    margin-bottom: 15;
`;

export const DayWrapper = styled.View`
    width: 25;
`;

export const Day = styled.Text`
    font-size: 10; 
    font-family: open-sans-light;
    color: #999898;
`;

export const Date = styled.Text`
    font-size: 16; 
    font-family: open-sans-regular;
`;

export const OccasionWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 33;
    background-color: #E5B001;
    border-radius: 5;
    margin-left: 10;
`;

export const Occasion = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-family: open-sans-light;
`;
