import { FETCH_GITHUB_CONTRIBUTORS } from '../actions/types';

const githubContributorsReducer = (githubContributors = [], { type, payload }) => {
    if (type === FETCH_GITHUB_CONTRIBUTORS)
        return payload;

    return githubContributors;
}

export default githubContributorsReducer;
