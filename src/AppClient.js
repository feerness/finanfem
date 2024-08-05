import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './home-html/NavbarCliente';
import Herramientas from './Herramientas-html/herramientas'; // Asegúrate de que el nombre del archivo coincida con la importación
import ArticulosCliente from './recursos-cliente/articulosCliente';
import PdfCliente from './recursos-cliente/pdfCliente';
import VideosCliente from './recursos-cliente/videosCliente';


function AppCliente() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/articulosCliente" element={<ArticulosCliente />} />
        <Route path="/pdfCliente" element={<PdfCliente />} />
        <Route path="/videosCliente" element={<VideosCliente />} />
      </Routes>
    </Router>
  );
}

export default AppCliente;