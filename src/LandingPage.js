import React from "react";
import HomeImage from "./HomePage/homeImage";
import PrimerCarruselH from "./HomePage/carruselH";
import InfoNosotras from "./HomePage/infoF";
import NuestraMision from "./HomePage/nuestraM";
import BarraContadores from "./HomePage/barraContadores";
import PreguntasFrecu from "./HomePage/preguntasFrecuentes";
import CajaR from "./HomePage/formsHome";

const HomePage = () => {
  return (
    <div>
      <div id="home"><HomeImage /></div>
      <div id="carrusel"><PrimerCarruselH /></div>
      <div id="nosotras"><InfoNosotras /></div>
      <div id="nuestramision"><NuestraMision /></div>
      <div id="contadores"><BarraContadores /></div>
      <div id="contacto"><CajaR /></div>
      <div id="faq"><PreguntasFrecu /></div>

    </div>
  );
};

export default HomePage;
