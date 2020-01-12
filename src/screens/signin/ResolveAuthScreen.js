import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';

const ResolveAuthScreen = ({ navigation }) => {
    const resolveAuth = async () => {
        const refresh = await AsyncStorage.getItem('refresh');
        if (refresh) navigation.navigate('mainFlow');
        else navigation.navigate('Signin');
    }

    useEffect(() => {
        resolveAuth()
    }, []);

    return null;
}

export default ResolveAuthScreen;
