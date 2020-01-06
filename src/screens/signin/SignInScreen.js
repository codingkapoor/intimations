import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OTP, Email } from './StyledComponents';
import Styles from './Styles';
import { platform } from '../../common/apis';

const _onPressGenerateOTP = () => {
    platform.get(`/passwordless/employees/mail@shivamkapoor.com/otp`)
        .then(() => {
            alert('OTP sent on the registered email id');
        })
        .catch(error => {
            console.log(error);
        });
}

const _onPressLogin = () => {
    platform.post(`/passwordless/employees/mail@shivamkapoor.com/tokens`)
        .then(() => {
            alert('Logged in')
        })
        .catch(error => {
            console.log(error);
        });
}

const SignInScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFEFE', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Image source={require('./intimations.png')} style={{ width: 200, height: 200, marginTop: 50, marginBottom: 20 }} />
            <View>
                <Email placeholder='Registered Email' />

                <OTP placeholder='One Time Password' />

                <TouchableOpacity
                    style={Styles.buttonWrapper}
                    onPress={_onPressGenerateOTP}
                >
                    <Text style={Styles.buttonText}>Generate OTP</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Styles.buttonWrapper}
                    onPress={_onPressLogin}
                >
                    <Text style={Styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default SignInScreen;
