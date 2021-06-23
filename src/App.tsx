import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import ProtectedRoute from 'Components/ProtectedRoute';
import Login from 'Components/Login';
import NotFoundPage from 'Components/NotFoundPage';
import Dashboard from './module/dashboard';
import rootSaga from './sagas';
import './App.scss';

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(() => {
  return {};
}, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
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
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/'>
            <Redirect from='/' to='dashboard' />
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
