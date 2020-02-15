import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default Styles = StyleSheet.create({
    otpInput: {
        width: wp('77%'), height: 100 
    },
    buttonWrapper: {
        alignItems: 'center',
        backgroundColor: '#2282D3',
        padding: 17,
        width: wp('77%'),
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'open-sans-light'
    },
    codeStyle: {
        width: 45,
        height: 55,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#D8DADA',
        fontFamily: 'open-sans-light',
        fontSize: 16
    }
});
