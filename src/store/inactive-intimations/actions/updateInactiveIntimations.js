import { UPDATE_INACTIVE_INTIMATIONS } from './types';

const updateInactiveIntimations = inactiveIntimations => {
    return {
        type: UPDATE_INACTIVE_INTIMATIONS,
        payload: inactiveIntimations
    };
};

export default updateInactiveIntimations;
