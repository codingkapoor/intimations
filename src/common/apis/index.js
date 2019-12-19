import axios from 'axios';
import { platformEndPoint } from '../../config';

export const github = axios.create({
    baseURL: `https://api.github.com/repos/codingkapoor/intimations-platform`
});

export const platform = axios.create({
    baseURL: `http://${platformEndPoint.interface}:${platformEndPoint.port}/api`
});
