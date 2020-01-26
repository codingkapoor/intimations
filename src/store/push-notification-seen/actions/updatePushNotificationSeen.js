import { UPDATE_PUSH_NOTIFICATION_SEEN } from './types';
import store from '../../index';

const updatePushNotificationSeen = pushNotificationSeen => {
    store.dispatch({
        type: UPDATE_PUSH_NOTIFICATION_SEEN,
        payload: pushNotificationSeen
    });
};

export default updatePushNotificationSeen;
