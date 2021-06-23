import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import Header from 'Components/Header';
import rootSaga from './sagas';
import './App.scss';

const logger = createLogger();

interface IProps {
  name: string;
  age: number;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(() => {
  return {};
}, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
sagaMiddleware.run(rootSaga);

function App(props: IProps) {
  const { name, age } = props;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={() => {
            return (
              <div className='app'>
                <Header />
                <span>{`Hello! I'm ${name}, ${age} yearssss old.`}</span>
              </div>
            )
          }} />
          {/*<ModuleRoute path={`${config.basePath}/${ModuleNames.account}`} component={AccountModuleRootComponent} />*/}
          {/*<ModuleRoute path={`${config.basePath}/${ModuleNames.withdraw}`} component={WithdrawModuleRootComponent} />*/}
          {/*/!*NOTE: 預設轉導到提現的提現子頁面*!/*/}
          {/*<ModuleRedirect to={`${config.basePath}/${ModuleNames.withdraw}`} />*/}
          {/*NOTE: 預設轉導到找不到子頁面*/}
          {/*<ModuleRoute component={NotFoundPage} />*/}
          <Redirect to="/login"/>
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
