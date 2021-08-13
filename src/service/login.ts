import service from 'Src/infra/http';

const LoginService = {
  login(name: string, password: string): Promise<any> {
    return service.post('/login', {
      name,
      password,
    });
  },
};
export default LoginService;
