import React from "react";
import HomeImage from "./HomePage/homeImage";
import PrimerCarruselH from "./HomePage/carruselH";
import InfoNosotras from "./HomePage/infoF";
import CardsCarrusel from "./HomePage/cardsTres";
import BarraContadores from "./HomePage/barraContadores";
import PreguntasFrecu from "./HomePage/preguntasFrecuentes";
import CajaR from "./HomePage/formsHome";

const HomePage = () => {
  return (
    <div>
      <HomeImage />
      <PrimerCarruselH />
      <InfoNosotras />
      <CardsCarrusel />
      <BarraContadores />
      <CajaR />
      <PreguntasFrecu />

    </div>
  );
};

export default HomePage;
