import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Herramientas from "./Herramientas-html/herramientas";
import Valores from "./Herramientas-html/Valores";
import App from "./App"; // Importa el componente App
import MyFooter from "./Herramientas-html/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Valores />
    <Herramientas />
    <MyFooter />
  </React.StrictMode>
);

reportWebVitals();
