import { CHECKOUT } from './types';

const checkoutFromActiveIntimation = () => (dispatch, getState) => {

    let { activeIntimations } = getState();

    let filterRes = activeIntimations[1].filter(i => i.empId === 128);
    let loggedInUsersActiveIntimation = filterRes.length > 0 ? filterRes[0] : {};

    let stageIntimation = {};
    stageIntimation['reason'] = loggedInUsersActiveIntimation.reason;
    stageIntimation['requests'] = loggedInUsersActiveIntimation.requests;

    dispatch({
        type: CHECKOUT,
        payload: stageIntimation
    });
};

export default checkoutFromActiveIntimation;
