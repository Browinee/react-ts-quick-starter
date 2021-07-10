export const TO_LOGIN = 'TO_LOGIN';
export const LOGGED = 'LOGGED';
export const LOGOUT = 'LOGOUT';
export const TO_LOGOUT = 'TO_LOGOUT';

export const login = (name: string, password: string) => {
  return {
    type: TO_LOGIN,
    payload: {
      name,
      password,
    },
  };
};

export const logged = () => {
  return {
    type: LOGGED,
    payload: {
      isLogin: true,
    },
  };
};

export const logout = () => {
  return {
    type: TO_LOGOUT,
  };
};
