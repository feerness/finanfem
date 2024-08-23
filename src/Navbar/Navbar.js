import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#home">
        <img src="/images/logo.final.png" alt="FinanFem Logo" className="brand-logo" />
      </a>
      <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#nosotras">¿Quiénes somos?</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#comunidad">Recursos</a>
          </li>        
          <li className="nav-item">
            <a className="nav-link" href="#comunidad">Comunidad</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#comunidad">Herramientas</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-primary custom-margin" href="#ingresar">Ingresar</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-secondary custom-margin" href="#registrarse">Registrarse</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
