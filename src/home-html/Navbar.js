import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">FinanFem</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/inicio">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/recursos">Recursos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/herramientas">Herramientas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cursos">Cursos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/foros">Comunidad</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/perfil">Perfil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/consultoria">Consultoría</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link btn btn-primary text-white" to="/login">Log In</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-secondary text-white ml-2" to="/signin">Sign In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
