

const fetchInactiveIntimations = () => async dispatch => {
    let res = await platform.get(`/employees/intimations`);
    let inactiveIntimations = res.data;

    let payload = _remodelInactivectiveintimations(inactiveIntimations);

    dispatch({
        type: FETCH_ACTIVE_INTIMATIONS,
        payload
    });

};

export default fetchInactiveIntimations;
