import { updateActiveIntimation } from '../../store/active-intimations/actions';
import { navigate } from '../NavigationService';

export const pushNotification = notification => {
    updateActiveIntimation(notification.data);
    if (notification.origin === 'selected')
        navigate('Feed');
}
