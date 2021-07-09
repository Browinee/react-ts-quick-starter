import React from 'react';
import LoginForm from 'Src/module/auth/pages/components/LoginForm';
import LoginWrapper from './components/LoginWrapper';

interface LoginProps {
  loading: boolean;
}

const Login = (props: LoginProps) => {
  const { loading } = props;
  const handleSubmit = () => {};
  return (
    <LoginWrapper>
      <h2>登入囉！</h2>
      <LoginForm />
    </LoginWrapper>
  );
};

export default Login;
