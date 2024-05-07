import axios from 'axios';
import Config from 'react-native-config';

export const api = axios.create({
  baseURL: Config.API_URL,
});

export const mockApi = axios.create({
  baseURL: Config.MOCK_API_URL,
});
