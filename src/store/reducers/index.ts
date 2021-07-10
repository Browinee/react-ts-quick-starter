import { combineReducers } from 'redux';
import login from '../../module/auth/store/reducers/login';
import app from './app';

export default combineReducers({
  login,
  app,
});
