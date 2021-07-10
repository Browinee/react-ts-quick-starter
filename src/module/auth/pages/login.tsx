import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm, { FormProps } from './components/LoginForm';
import LoginWrapper from './components/LoginWrapper';

export type LoginProps = {
  loading: boolean;
  login: (name: string, password: string) => void;
  isLogin: boolean;
};

const Login = (props: LoginProps) => {
  const { loading, login, isLogin } = props;
  const handleSubmit = (formData: FormProps) => {
    const { name, password } = formData;
    login(name, password);
  };
  return isLogin ? (
    <Redirect to='/todolist' />
  ) : (
    <LoginWrapper>
      <h2>登入囉！</h2>
      <LoginForm loading={loading} handleSubmit={handleSubmit} />
    </LoginWrapper>
  );
};

export default Login;
