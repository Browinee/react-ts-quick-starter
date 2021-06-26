import Mock from 'mockjs';
import Login from './login';

Mock.setup({
  timeout: '300-600',
});

Mock.mock('/api/login', 'post', Login.login);
Mock.mock('/api/logout', 'get', Login.logout);
export default Mock;
