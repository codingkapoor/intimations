import _ from 'lodash';
import { github } from '../../../common/apis';
import { FETCH_GITHUB_CONTRIBUTORS } from './types';

const fetchGithubContributors = () => async dispatch => {
    const res = await github.get('/contributors');
    const githubContributors = res.data.map(c => _.pick(c, ['login', 'html_url']));

    dispatch({
        type: FETCH_GITHUB_CONTRIBUTORS,
        payload: githubContributors
    });
};

export default fetchGithubContributors;
