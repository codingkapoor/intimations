import { updateActiveIntimation } from '../../store/active-intimations/actions';
import { updatePushNotificationSeen } from '../../store/push-notification-seen/actions';
import { navigate } from '../NavigationService';

export const pushNotification = notification => {
    updateActiveIntimation(notification.data);
    updatePushNotificationSeen(false);
    if (notification.origin === 'selected')
        navigate('Feed');
}
