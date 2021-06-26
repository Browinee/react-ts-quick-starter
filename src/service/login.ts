const LoginService = {
  login(): Promise<{ isLogin: boolean }> {
    return Promise.resolve({ isLogin: true });
    // return service.post('/login', {
    //   name,
    //   password,
    // });
  },
};
export default LoginService;
