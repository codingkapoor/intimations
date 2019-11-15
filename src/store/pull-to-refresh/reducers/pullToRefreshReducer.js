import { UPDATE_PULL_TO_REFRESH } from '../actions/types';

const pullToRefreshReducer = (pullToRefresh = false, { type, payload }) => {
    if (type === UPDATE_PULL_TO_REFRESH)
        return payload;

    return pullToRefresh;
}

export default pullToRefreshReducer;
