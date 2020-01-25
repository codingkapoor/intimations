import updateActiveIntimations from './updateActiveIntimations';
import store from '../../index';

const updateActiveIntimation = activeIntimation => {
    const { empId, empName, lastModified, reason, requests } = activeIntimation;

    const { activeIntimations } = store.getState();

    store.dispatch(updateActiveIntimations([
        ...activeIntimations[1].filter(i => i.empId !== empId),
        {
            "empId": empId,
            "empName": empName,
            "lastModified": lastModified,
            "reason": reason,
            "requests": requests,
        }
    ]));
}

export default updateActiveIntimation;
