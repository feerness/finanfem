import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
//import App from './App'; // Importa el componente App
import AppCliente from './AppClient';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <AppCliente /> 
  </React.StrictMode>
);

reportWebVitals();
//<App /> 