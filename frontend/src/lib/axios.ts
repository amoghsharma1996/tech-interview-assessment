import axios from 'axios';

import { API_URL } from '../config/index';

export const httpClient = axios.create({ baseURL: API_URL });
