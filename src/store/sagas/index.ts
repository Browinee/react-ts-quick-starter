import { all } from 'redux-saga/effects';
import {watchLogin} from "../../module/auth/store/sagas/login";
export default function* rootSaga() {
  yield all([watchLogin()]);
}
