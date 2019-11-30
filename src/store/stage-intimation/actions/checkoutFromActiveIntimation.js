import { CHECKOUT } from './types';

const checkoutFromActiveIntimation = stageIntimation => {
    return {
        type: CHECKOUT,
        payload: stageIntimation
    };
};

export default checkoutFromActiveIntimation;
