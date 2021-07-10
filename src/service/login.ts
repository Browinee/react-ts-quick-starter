import service from 'Src/infra/http';

const LoginService = {
  login(name: string, password: string): Promise<any> {
    console.log("Loginservice", name, password);
    return service.post('/login', {
      name,
      password,
    });
  },
};
export default LoginService;
