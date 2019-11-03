import axios from 'axios';
import { platform } from '../../config';

export default axios.create({
    baseURL: `http://${platform.interface}:${platform.port}/api`
});
