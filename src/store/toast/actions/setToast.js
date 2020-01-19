import { SET_TOAST } from './types';

const setToast = (type, delayToShow, delayToHide) => dispatch => {
    setTimeout(() => dispatch({ type: SET_TOAST, payload: { type, visible: true } }), delayToShow);
    setTimeout(() => dispatch({ type: SET_TOAST, payload: { type, visible: false } }), delayToHide);
};

export default setToast;
