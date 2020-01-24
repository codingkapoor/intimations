import styled from 'styled-components/native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Email = styled.TextInput`
    width: ${wp("77%")};
    height: ${hp("7%")};
    border-radius: 5px;
    border-color: #D8DADA;
    border-width: 1px;
    margin-top: 15px;
    padding-left: 17px;
    color: #595959;
    font-size: ${wp("4%")};
    line-height: ${wp("4%")};
`;

