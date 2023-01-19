import axios, { AxiosHeaders } from 'axios';
import { auth } from 'renderer/firebase';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers = { ...config.headers } as AxiosHeaders;
    //@ts-expect-error
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default api;
