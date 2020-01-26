import { UPDATE_PUSH_NOTIFICATION_SEEN } from '../actions/types';

const pushNotificationSeenReducer = (pushNotificationSeen = true, { type, payload }) => {
    if (type === UPDATE_PUSH_NOTIFICATION_SEEN)
        return payload;

    return pushNotificationSeen;
}

export default pushNotificationSeenReducer;
