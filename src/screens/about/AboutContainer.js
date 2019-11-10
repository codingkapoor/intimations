import { connect } from 'react-redux';
import AboutScreen from './AboutScreen';
import { fetchGithubContributors } from '../../store/github-contributors/actions';

const mapStateToProps = ({ githubContributors }) => {
    return { githubContributors };
};

export default connect(mapStateToProps, { fetchGithubContributors })(AboutScreen);
