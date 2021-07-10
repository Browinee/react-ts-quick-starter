import axios from 'axios';

const service = axios.create({
  baseURL: '/api',
  timeout: 10 * 1000,
});

service.interceptors.request.use((config) => {
  return config;
});

service.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (err) => {
    if (err.response.status === 403) {
      // 跳轉到登入頁
    }
    return Promise.reject(err);
  },
);

export default service;
