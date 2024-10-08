import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Herramientas from './Herramientas-html/herramientas';
import App from "./App"; // Importa el componente App
import MyFooter from "./Herramientas-html/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//import AppCliente from "./AppClient";

//import AppCliente from "./AppClient";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <MyFooter />
  </React.StrictMode>
);

reportWebVitals();
//<AppCliente />
