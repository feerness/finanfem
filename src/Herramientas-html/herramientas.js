import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiFunction from "./apiFunction";
import Valores from "./Valores";

const Herramientas = () => {
  return (
    <section className="content py-5">
      <div className="container">
        <h2>Indicadores Financieros</h2>
        <Valores />
        {ApiFunction}
        <ApiFunction />
      </div>
    </section>
  );
};

export default Herramientas;
