import { SET_TOAST } from '../actions/types';

const toastReducer = (toast = { type: "", visible: false }, { type, payload }) => {
    if (type === SET_TOAST)
        return payload;

    return toast;
}

export default toastReducer;
