import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Herramientas from "./Herramientas-html/herramientas";
import Valores from "./Herramientas-html/Valores";
import App from "./App"; // Importa el componente App

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Valores />
    <Herramientas />
    <App />
  </React.StrictMode>
);

reportWebVitals();
