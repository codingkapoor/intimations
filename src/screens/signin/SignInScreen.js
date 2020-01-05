import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OTP, Email } from './StyledComponents';
import Styles from './Styles';
import { platform } from '../../common/apis';

const _onPress = () => {
    platform.get(`/passwordless/employees/mail@shivamkapoor.com/otp`)
        .then(() => {
            alert('OTP sent on the registered email id');
        })
        .catch(error => {
            console.log(error);
        });
}

const SignInScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFEFE', justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ marginTop: 200 }}>
                <Email placeholder='Registered Email' />

                <OTP placeholder='One Time Password' />

                <TouchableOpacity
                    style={Styles.generateOTPWrapper}
                    onPress={_onPress}
                >
                    <Text style={Styles.generateOTP}>Generate OTP</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.loginWrapper}>
                    <Text style={Styles.login}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default SignInScreen;
