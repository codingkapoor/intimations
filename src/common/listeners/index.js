import { updateActiveIntimations } from '../../store/active-intimations/actions';
import { updatePushNotificationSeen } from '../../store/push-notification-seen/actions';
import { navigate } from '../NavigationService';
import store from '../../store/index';

const activeIntimationUpdater = notification => {
    const { empId, empName, lastModified, reason, requests, type } = notification;

    const { activeIntimations } = store.getState();

    if (type === 'Cancelled') {
        store.dispatch(updateActiveIntimations([
            ...activeIntimations[1].filter(i => i.empId !== empId)
        ]));
    } else {
        store.dispatch(updateActiveIntimations([
            ...activeIntimations[1].filter(i => i.empId !== empId),
            {
                'empId': empId,
                'empName': empName,
                'lastModified': lastModified,
                'reason': reason,
                'requests': requests,
            }
        ]));
    }
}

export const pushNotification = notification => {
    const data = notification.data;

    activeIntimationUpdater({
        "empId": data.empId,
        "empName": data.empName,
        "lastModified": data.lastModified,
        "reason": data.reason,
        "requests": JSON.parse(data.requests),
        "type": data.type
    });

    updatePushNotificationSeen(false);
    if (notification.origin === 'selected')
        navigate('Feed');
}
