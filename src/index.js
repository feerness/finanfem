<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Herramientas from './Herramientas-html/herramientas';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./AppAdmin"; // Importa el componente App
import MyFooter from "./Herramientas-html/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
<<<<<<< HEAD
import AppCliente from "./AppClient";
>>>>>>> main
=======
//import AppCliente from "./AppClient";
>>>>>>> main

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
<<<<<<< HEAD
    <Herramientas/>
=======
    <AppCliente />
=======
    <App />
>>>>>>> main
    <MyFooter />
>>>>>>> main
  </React.StrictMode>
);

reportWebVitals();
//<AppCliente />
