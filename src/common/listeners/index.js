import { updateActiveIntimation } from '../../store/active-intimations/actions';

export const pushNotification = notification => {
    updateActiveIntimation(notification.data);
}
