import { UPDATE_PULL_TO_REFRESH } from './types';

const updatePullToRefresh = pullToRefresh => {
    return {
        type: UPDATE_PULL_TO_REFRESH,
        payload: pullToRefresh
    };
};

export default updatePullToRefresh;
