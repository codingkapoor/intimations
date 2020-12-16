import React, { useState } from 'react';
import { AsyncStorage, Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import JwtDecode from 'jwt-decode';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import OTPTextView from 'react-native-otp-textinput';

import { Email } from './StyledComponents';
import Styles from './Styles';
import { platform } from '../../common/apis';
import Toasts, { OTP_SENT, SIGNIN_FAILURE, REQUEST_EMAIL, REQUEST_OTP } from '../../common/components/Toasts';

const saveTokens = async tokens => {
    await AsyncStorage.setItem('access', tokens.access);
    await AsyncStorage.setItem('refresh', tokens.refresh);
}

const saveUserProfile = async profile => await AsyncStorage.setItem('profile', profile);

const SignInScreen = ({ navigation, setToast, toast }) => {
    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');

    const _onPressGenerateOTP = () => {
        if (email.trim() === "")
            setToast(REQUEST_EMAIL, 100, 3000);
        else {
            platform.get(`/passwordless/employees/${email}/otp`)
                .then(() => { setToast(OTP_SENT, 100, 3000) })
                .catch(error => {
                    setToast(SIGNIN_FAILURE, 100, 3000);
                    console.log(error);
                });
        }
    }

    const _onPressLogin = async () => {
        if (email.trim() === "")
            setToast(REQUEST_EMAIL, 100, 3000);
        else if (otp.trim() === "")
            setToast(REQUEST_OTP, 100, 3000);
        else {
            try {
                const res = await platform.post(`/passwordless/employees/${email}/tokens`, otp);
                saveTokens(res.data);
                saveUserProfile(JwtDecode(res.data.access).sub);

                const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
                if (status !== 'granted') return;

                const expoToken = (await Notifications.getExpoPushTokenAsync()).data;
                console.log(expoToken);
                const profile = await AsyncStorage.getItem('profile');
                await platform.put(
                    `/notifier/employees/${profile}/subscribe`,
                    expoToken,
                    { headers: { Authorization: 'Bearer ' + res.data.access, 'Content-Type': 'text/plain' } }
                );

                navigation.navigate('mainFlow');
            } catch (error) {
                setToast(SIGNIN_FAILURE, 100, 3000);
                console.log(error);
            }
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFEFE', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Image source={require('./intimations.png')} style={{ width: 200, height: 200, marginTop: 50, marginBottom: 20 }} />
            <View style={{ alignItems: 'center' }}>
                <Email
                    placeholder='Registered Email'
                    value={email}
                    onChangeText={setEmail}
                    autoCorrect={false}
                />

                <OTPTextView 
                    inputCount={6}
                    keyboardType="numeric"
                    textInputStyle={Styles.codeStyle}
                    containerStyle={Styles.otpInput}
                    tintColor="#EEEEEE"
                    offTintColor="#EEEEEE"
                    handleTextChange={setOTP}
                />

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

                <Toasts showToast={toast.type} visible={toast.visible} />
            </View>
        </SafeAreaView>
    );
}

export default SignInScreen;
