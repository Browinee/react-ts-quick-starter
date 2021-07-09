import React from 'react';
import LoginWrapper from './components/LoginWrapper';
import LoginForm from 'Src/module/auth/pages/components/LoginForm';

const Login = () => {
  return (<LoginWrapper>
    <h2>登入囉！</h2>
    <LoginForm />
  </LoginWrapper>)
};

export default Login;
