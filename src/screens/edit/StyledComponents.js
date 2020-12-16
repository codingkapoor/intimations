import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const Reason = styled.TextInput`
    width: ${wp('90%')};
    height: 100px;
    border-color: gray;
    border-radius: 10px;
    margin-top: 20px;
    padding: 15px;
    color: #595959;
    font-size: 16px;
    font-family: montserrat-light;
    background-color: #FBFBFB;
`;
