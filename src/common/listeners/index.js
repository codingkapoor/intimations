import { updateActiveIntimation } from '../../store/active-intimations/actions';
import { updatePushNotificationSeen } from '../../store/push-notification-seen/actions';
import { navigate } from '../NavigationService';

export const pushNotification = notification => {
    const data = notification.data;
    const intimation = {
        "empId": data.empId,
        "empName": data.empName,
        "lastModified": data.lastModified,
        "reason": data.reason,
        "requests": JSON.parse(data.requests)
    };
    updateActiveIntimation(intimation);
    updatePushNotificationSeen(false);
    if (notification.origin === 'selected')
        navigate('Feed');
}
