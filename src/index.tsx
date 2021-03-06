import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';

if (module && module.hot) {
  module.hot.accept();
}

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mock');
  worker.start();
}

ReactDOM.render(<App />, document.querySelector('#root'));
