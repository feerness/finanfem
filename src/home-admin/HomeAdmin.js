import React from "react";
import "./HomeAdmin.css";
import Image1 from "./1.png"; // Asegúrate de usar la ruta correcta

function CardAdmin({ title, links }) {
  return (
    <div className="card1">
      <div className="card-body1">
        <div className="image-container1">
          <img className="uwu" src={Image1} alt="icono-sirena" />
        </div>
        <h2 className="card-title1">{title}</h2>
        {links.map((link, index) => (
          <button
            className="card-button1"
            key={index}
            onClick={() => (window.location.href = link.href)}
          >
            {link.text}
          </button>
        ))}
      </div>
    </div>
  );
}

function HomeAdmin() {
  const cardsData = [
    {
      title: "Usuarios",
      links: [
        { href: "#", text: "Usuarios registrados" },
        { href: "#", text: "Usuarios baneados" },
        { href: "#", text: "Moderadores" },
        { href: "#", text: "Usuarios nuevos" },
      ],
    },
    {
      title: "Foro",
      links: [
        { href: "#", text: "Publicaciones" },
        { href: "#", text: "Comentarios" },
        { href: "#", text: "Reportes" },
      ],
    },
    {
      title: "Recursos Educativos",
      links: [
        { href: "#", text: "Recursos actuales" },
        { href: "#", text: "Agregar recursos" },
        { href: "#", text: "Eliminar recursos" },
      ],
    },
    {
      title: "Consultoría",
      links: [
        { href: "#", text: "Consultas" },
        { href: "#", text: "Respuestas anteriores" },
        { href: "#", text: "Pendientes" },
        { href: "#", text: "Descartados" },
      ],
    },
  ];

  return (
    <div className="app-container1">
      <div className="card-container1">
        {cardsData.map((card, index) => (
          <CardAdmin key={index} title={card.title} links={card.links} />
        ))}
      </div>
    </div>
  );
}

export default HomeAdmin;
