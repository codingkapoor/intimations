import axios from 'axios';
import { platform } from '../../config';

export default axios.create({
    baseURL: `https://api.github.com/repos/codingkapoor/simple-lms-mobile`
});
