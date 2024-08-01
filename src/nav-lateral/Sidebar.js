import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Asegúrate de crear y estilizar este archivo CSS

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Comunidad</h2>
      <ul className="sidebar-list">
        <li>
          <Link to="/comunidad-admin/foroAdmin">Foro</Link>
        </li>
        <li>
          <Link to="/recursos">Archivos</Link>
        </li>
        <li>
          <Link to="/herramientas">Perfiles</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
/*<li className="dropdown">
          <Link to="#" className="dropdown-toggle">Perfiles</Link>
          <ul className="dropdown-menu">
            <li><Link to="/comunidad-admin/foroAdmin">Foro</Link></li>
            <li><Link to="/comunidad-admin/archivadosAdmin">Archivados</Link></li>
            <li><Link to="/comunidad-admin/perfilesAdmin">Perfiles</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/perfil">Perfil</Link>
        </li>
        <li>
          <Link to="/consultoria">Consultoría</Link>
        </li>*/