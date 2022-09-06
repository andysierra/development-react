import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Bootstrap 5.0
import '../node_modules/@popperjs/core/dist/umd/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { App } from './Practicas/UseFormPractica/App'
import { Padre } from './Practicas/memoPractica/Padre';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Padre />
  </React.StrictMode>
)
