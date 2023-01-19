//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@popperjs/core/dist/esm/popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>,
)
