import React from "react";
import HomeImage from "./HomePage/homeImage";
import PrimerCarruselH from "./HomePage/carruselH";
import InfoNosotras from "./HomePage/infoF";
import CardsCarrusel from "./HomePage/cardsTres";
import BarraContadores from "./HomePage/barraContadores";
import PreguntasFrecu from "./HomePage/preguntasFrecuentes";

const HomePage = () => {
  return (
    <div>
      <HomeImage />
      <PrimerCarruselH />
      <InfoNosotras />
      <CardsCarrusel />
      <BarraContadores />
      <PreguntasFrecu />
      
    </div>
  );
};

export default HomePage;
