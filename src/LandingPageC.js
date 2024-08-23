import React from "react";
import HomeImage from "./HomePage/homeImage";
import PrimerCarruselH from "./HomePage/carruselH";
import InfoNosotras from "./HomePage/infoF";
import CardsCarrusel from "./HomePage/cardsTres";
import BarraContadores from "./HomePage/barraContadores";
import PreguntasFrecu from "./HomePage/preguntasFrecuentes";
import CajaR from "./HomePage/formsHome";

const HomePageCliente = () => {
  return (
    <div>
      <div id="home"><HomeImage /></div>
      <div id="carrusel"><PrimerCarruselH /></div>
      <div id="nosotras"><InfoNosotras /></div>
      <div id="cards"><CardsCarrusel /></div>
      <div id="contadores"><BarraContadores /></div>
      <div id="contacto"><CajaR /></div>
      <div id="faq"><PreguntasFrecu /></div>

    </div>
  );
};

export default HomePageCliente;
