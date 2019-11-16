import { UPDATE_TODAYS_INTIMATIONS } from './types';

const updateTodaysIntimations = activeIntimations => {
    const today = (new Date()).toISOString().split('T')[0];

    let todaysIntimations = [];

    activeIntimations
        .filter(i => i.requests.filter(r => r.date === today).length > 0)
        .map(i =>
            todaysIntimations.push(
                {
                    empName: i.empName,
                    reason: i.reason,
                    type: i.requests.filter(r => r.date === today).map(r => r.requestType)[0]
                }
            )
        );

    return {
        type: UPDATE_TODAYS_INTIMATIONS,
        payload: todaysIntimations
    };

};

export default updateTodaysIntimations;
