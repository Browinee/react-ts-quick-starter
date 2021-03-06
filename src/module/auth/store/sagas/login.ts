import { call, cancel, cancelled, fork, put, take } from 'redux-saga/effects';
import { logged, LOGOUT, TO_LOGIN, TO_LOGOUT } from '../actions/login';
import LoginService from '../../../../service/login';
import { toggleLoading } from 'Src/store/actions/app';

function* authorize(name: string, password: string): any {
  try {
    const loginInfo: any = yield call(LoginService.login, name, password);
    console.log(loginInfo);
    yield put(logged());
  } catch (error: any) {
    console.error(error);
    yield put({ type: TO_LOGOUT });
  } finally {
    yield put(toggleLoading(false));
    if (yield cancelled()) {
      console.log('finally cancelled');
    }
  }
}

export function* watchLogin(): any {
  while (true) {
    const loginAction = yield take(TO_LOGIN);
    const { name, password } = loginAction.payload;
    yield put(toggleLoading(true));
    const task = yield fork(authorize, name, password);
    // const logoutAction = yield take(TO_LOGOUT);
    yield take(TO_LOGOUT);
    yield cancel(task);
    console.log('after canceled');
    yield put({ type: LOGOUT });
  }
}
