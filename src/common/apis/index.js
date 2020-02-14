import axios from 'axios';
import { platformEndPoint } from '../../config';

export const platform = axios.create({
    baseURL: `http://${platformEndPoint.interface}:${platformEndPoint.port}/api`
});
