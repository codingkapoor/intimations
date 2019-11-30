import { CHECKOUT } from './types';

const checkoutFromActiveIntimation = () => (dispatch, getState) => {

    let { activeIntimations } = getState();

    let filterRes = activeIntimations[1].filter(i => i.empId === 127);
    let loggedInUsersActiveIntimation = filterRes.length > 0 ? filterRes[0] : {};
    
    dispatch({
        type: CHECKOUT,
        payload: loggedInUsersActiveIntimation
    });
};

export default checkoutFromActiveIntimation;
