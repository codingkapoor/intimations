import { AsyncStorage } from 'react-native';
import JwtDecode from 'jwt-decode';

import { navigate } from '../../NavigationService';
import { platform } from '../../apis';

const _saveToken = async access => {
    await AsyncStorage.setItem('access', access);
}

export const getAccessToken = async () => {
    const refresh = await AsyncStorage.getItem('refresh');
    const access = await AsyncStorage.getItem('access');

    const now = Math.ceil(new Date().getTime() / 1000);

    if (!refresh || (now - JwtDecode(refresh).exp > 0))
        navigate('Signin');

    if (now - JwtDecode(access).exp > 0) {
        try {
            const res = await platform.post(`/passwordless/employees/mail@shivamkapoor.com/jwt`, refresh, { headers: { 'Content-Type': 'text/plain' } });
            const newAccessToken = res.data;

            _saveToken(newAccessToken);

            return newAccessToken;
        } catch (e) {
            navigate('Signin');
        }
    } else
        return access;

};
