import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PrivateRouteProps {
  // tslint:disable-next-line:no-any
  children: any;
  [attribute: string]: any;
}
const ProtectedRoute = ({ children, ...rest }: PrivateRouteProps) => {
  const isLogin = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;
