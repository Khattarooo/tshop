import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backend-practice.euriskomobility.me/',
});

export const mockApi = axios.create({
  baseURL: 'https://6628b3a154afcabd07369c31.mockapi.io/',
});
