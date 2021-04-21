import axios from 'axios';

import IP_ADDRESS from '../constants/IP_ADDRESS';

const api = axios.create({
    baseURL: `${IP_ADDRESS}:3333`,
});

export default api;