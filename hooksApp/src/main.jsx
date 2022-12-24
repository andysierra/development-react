import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'

// Bootstrap 5.0
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { HooksApp } from './HooksApp';
// import { Counter } from './01-useState/Counter';
// import { FormWithCustomHook } from './01-useState/FormWithCustomHook';
// import { CombinacionHooks } from './01-useState/CombinacionHooks';
// import { UseMemoExample } from './06-memos/UseMemoExample';
// import { Padre } from './07-tarea-memo/Padre';
// import { TodoApp } from './08-useReducer/TodoApp';
import { App } from './09-context/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
