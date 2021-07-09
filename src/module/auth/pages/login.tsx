import React from 'react';
import LoginForm, { FormProps } from 'src/module/auth/pages/components/LoginForm';
import LoginWrapper from './components/LoginWrapper';

interface LoginProps {
  loading: boolean;
}

const Login = (props: LoginProps) => {
  const { loading } = props;
  const handleSubmit = (formData: FormProps) => {};
  return (
    <LoginWrapper>
      <h2>登入囉！</h2>
      <LoginForm loading={loading} handleSubmit={handleSubmit} />
    </LoginWrapper>
  );
};

export default Login;
