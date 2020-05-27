import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const Email = styled.TextInput`
    width: ${wp('77%')};
    height: 55;
    border-radius: 5px;
    border-color: #EEEEEE;
    border-width: 1px;
    margin-top: 15px;
    padding: 17px;
    color: #595959;
    font-size: 18px;
    font-family: open-sans-light;
`;
