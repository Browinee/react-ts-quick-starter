import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import ProtectedRoute from 'Components/ProtectedRoute';
// import Login from 'Components/Login';
import NotFoundPage from 'Components/NotFoundPage';
import Login from './module/auth';
import Dashboard from './module/dashboard';
import rootSaga from './store/sagas';
import './App.scss';
import rootRedcuer from './store/reducers';
import './mock';
import TodoList from './module/todolist';

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootRedcuer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <ProtectedRoute exact path='/dashboard'>
            <Dashboard />
          </ProtectedRoute>
          <Route exact path='/todolist'>
            <TodoList />
          </Route>
          <Route exact path='/notfound'>
            <NotFoundPage />
          </Route>
          <Route path='*'>
            <Redirect from='/' to='notfound' />
          </Route>
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
