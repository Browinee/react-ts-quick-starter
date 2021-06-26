import { LOGGED, LOGOUT } from 'Src/store/actions/login';

type initialStateProps = {
  isLogin: boolean;
};
type actionProps = {
  type: string;
  payload: {
    isLogin: boolean;
  };
};

const initialState = {
  isLogin: false,
};
export default function Login(state: initialStateProps = initialState, action: actionProps) {
  switch (action.type) {
    case LOGGED:
      return {
        ...state,
        isLogin: action.payload.isLogin,
      };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}
