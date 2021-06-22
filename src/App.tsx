import React from 'react';
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
      <div className='app'>
        <Header />
        <span>{`Hello! I'm ${name}, ${age} yearssss old.`}</span>
      </div>
    </Provider>
  );
}

export default App;
