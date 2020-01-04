import React from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignInScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFEFE' }}>
            <TextInput placeholder='Registered Email' />

            <TextInput placeholder='OTP' />
            
            <TouchableOpacity>
                <Text>Generate OTP</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default SignInScreen;
