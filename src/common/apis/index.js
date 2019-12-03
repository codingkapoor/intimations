import axios from 'axios';
import { platformEndPoint } from '../../config';

export const github = axios.create({
    baseURL: `https://api.github.com/repos/codingkapoor/simple-lms-mobile`
});

export const platform = axios.create({
    baseURL: `http://${platformEndPoint.interface}:${platformEndPoint.port}/api`
});
