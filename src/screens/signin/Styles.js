import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default Styles = StyleSheet.create({
    otpInput: {
        width: wp('79%'), height: 50, marginTop: 15, marginBottom: 40
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
        width: 42,
        height: 55,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderColor: '#EEEEEE',
        fontFamily: 'open-sans-light',
        fontSize: 16
    }
});
