import { TOGGLE_LOADING } from 'src/store/actions/app';

type initialStateProps = {
  loading: boolean;
};
type actionProps = {
  type: string;
  payload: { [attribute: string]: any };
};

const initialState = {
  loading: false,
};
export default function Login(state: initialStateProps = initialState, action: actionProps) {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
}
