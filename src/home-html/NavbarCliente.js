import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavbarCliente() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/images/logo.final.png">
        <img
          src="/images/logo.final.png"
          alt="FinanFem Logo"
          className="brand-logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/inicio">
              Inicio
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              id="recursosDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Recursos
            </Link>
            <div className="dropdown-menu" aria-labelledby="recursosDropdown">
              <Link className="dropdown-item" to="./articulosCliente">
                Artículos
              </Link>
              <Link className="dropdown-item" to="./pdfCliente">
                PDF's
              </Link>
              <Link className="dropdown-item" to="./videosCliente">
                Videos
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              id="herramientasDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Herramientas
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="herramientasDropdown"
            >
              <Link className="dropdown-item" to="./herramientas">
                Indicadores Financieros
              </Link>
              <Link className="dropdown-item" to="./noticiasCliente">
                Noticias
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              id="comunidadDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Comunidad
            </Link>
            <div className="dropdown-menu" aria-labelledby="comunidadDropdown">
              <Link className="dropdown-item" to="./foroCliente">
                Foro
              </Link>
              <Link className="dropdown-item" to="./perfilesCliente">
                Actividad
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              id="administracionDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Consultoría
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="administracionDropdown"
            >
              <Link className="dropdown-item" to="./reportesCliente">
                Reportes
              </Link>
              <Link className="dropdown-item" to="./actividadCliente">
                Reglas
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/perfil">
              <img
                src="/images/profile-icon.png"
                alt="Foto de perfil"
                className="profile-pic"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarCliente;
