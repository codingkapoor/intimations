import React, { useEffect } from 'react';
import { AsyncStorage, Platform } from 'react-native';
import { Notifications } from 'expo';
import { loadAllFonts } from '../../store/actions';

import { pushNotification } from '../../common/listeners';

const ResolveAuthScreen = ({ navigation }) => {
    const resolveAuth = async () => {
        await loadAllFonts();

        const refresh = await AsyncStorage.getItem('refresh');
        // console.log(await AsyncStorage.getItem('access'));
        if (refresh) navigation.navigate('mainFlow');
        else navigation.navigate('Signin');
    }

    useEffect(() => {
        Notifications.addListener(pushNotification);

        if (Platform.OS === 'android') {
            Notifications.createChannelAndroidAsync('push-notifications', {
                name: 'Push Notifications',
                sound: true,
                vibrate: true
            });
        }

        resolveAuth();
    }, []);

    return null;
}

export default ResolveAuthScreen;
