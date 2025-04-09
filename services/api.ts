import axios from 'axios';
import config from '../config';
/**
 * Create an Axios instance with base configuration.
 */
const apiClient = axios.create({
  baseURL: config.API_BASE_URL,
  withCredentials: true, // Always include cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

export { apiClient };
export default apiClient;
