import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './home-html/Navbar';
import Herramientas from './Herramientas-html/herramientas'; // Asegúrate de que el nombre del archivo coincida con la importación
import ForoAdmin from './comunidad-admin/foroAdmin';
import ArchivadosAdmin from './comunidad-admin/archivadosAdmin';
import PerfilesAdmin from './comunidad-admin/perfilesAdmin';
import ArticulosAdmin from './recursos-admin/articulosAdmin';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/foroAdmin" element={<ForoAdmin />} />
        <Route path="/archivadosAdmin" element={<ArchivadosAdmin />} />
        <Route path="/perfilesAdmin" element={<PerfilesAdmin />} />
        <Route path="/articulosAdmin" element={<ArticulosAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;

