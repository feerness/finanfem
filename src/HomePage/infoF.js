import React from "react";
import "./infoF.css";

const InfoNosotras = () => {
  return (
    <div className="containerf">
      <div className="ContenedorMujer">
        <img
          src="/images/img3.png"
          alt="imagen sobre nosotras"
          className="img-mujer"
        />
      </div>
      <div className="containerQS">
        <div className="titulo">
          <h2>¿Quiénes Somos?</h2>
        </div>
        <div className="texto-informativo">
          <p>
            Somos un grupo de mujeres dedicadas a apoyar a otras mujeres en la
            gestión e inversión de su dinero. Sabemos que el acceso a
            conocimientos y herramientas financieras ha sido limitado y que, a
            menudo, no se han presentado de manera comprensible ni adaptada a
            diferentes estilos de aprendizaje. Esto ha llevado a la percepción
            de que aprender sobre finanzas es difícil.
          </p>
          <p>
            En Finanfem, queremos romper esa limitación y dirigirnos a un
            público femenino, ya que, en su mayoría, las mujeres son las jefas
            de hogar y quienes administran los recursos.
          </p>
        </div>
        <div className="boton">
          <button className="botoncito">Únete a nuestra Comunidad</button>
        </div>
      </div>
    </div>
  );
};

export default InfoNosotras;
