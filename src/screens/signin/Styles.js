import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default Styles = StyleSheet.create({
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2282D3',
        width: wp("77%"),
        height: hp("7%"),
        borderRadius: 5,
        marginTop: 15
    },
    buttonText: {
        color: 'white',
        fontSize: wp("4%")
    },
    codeStyle: {
        width: wp("11%"),
        height: hp("7%"),
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#D8DADA'
    }
});
