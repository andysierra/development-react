import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import CounterApp from './CounterApp/CounterApp'

import './index.css';

ReactDOM.render(
  <StrictMode>
    <CounterApp value={10}/>
  </StrictMode>,
  document.querySelector('#root')
);
/* ReactDOM.render(
  <StrictMode>
    <App name='Ionut'/>
  </StrictMode>,
  document.querySelector('#root')
); */