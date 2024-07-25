import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiFunction from './apiFunction';

const Herramientas = () => {
  return (
    <section className="content py-5">
      <div className="container">
        <h2>Indicadores Financieros</h2>
        <h5>Economic Indicators</h5>
        {ApiFunction}
        <ApiFunction />
      </div>
    </section>
  );
};

export default Herramientas;
