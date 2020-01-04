import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignInScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFEFE' }}>
            <Text>
                This is a sign in screen
        </Text>
        </SafeAreaView>
    );
}

export default SignInScreen;
