import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const DetailsWrapper = styled.View`
    width: ${wp('90%')};
    border-radius: 10px;
    padding: 15px;
    padding-top: 10px;
    background-color: #F4F7FA;
    margin-top: 20px;
`;

export const Reason = styled.Text`
    font-size: 14px;
    font-family: montserrat-light;
`;
