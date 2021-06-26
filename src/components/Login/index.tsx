import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'Src/store/actions/login';

const Login = () => {
  const dispath = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const passwordHandler = (e: any) => setPassword(e.target.value);
  const nameHandler = (e: any) => setName(e.target.value);
  const loginHandler = () => {
    dispath(login(name, password));
  };
  return (
    <div>
      <h1>Login</h1>
      name: <input type='text' value={name} onChange={nameHandler} />
      password: <input type='password' value={password} onChange={passwordHandler} />
      <button type='submit' onClick={loginHandler}>
        Login
      </button>
    </div>
  );
};
export default Login;
