import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./HomePage/NavbarAdmin";
import Herramientas from "./Herramientas-html/herramientas"; // Asegúrate de que el nombre del archivo coincida con la importación
import ArticulosAdmin from "./recursos-admin/articulosAdmin";
import PdfAdmin from "./recursos-admin/pdfAdmin";
import VideosAdmin from "./recursos-admin/videosAdmin";
import NewsComponent from "./noticias/noticiasCliente";

function AppAdministrador() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/articulosAdmin" element={<ArticulosAdmin />} />
        <Route path="/pdfAdmin" element={<PdfAdmin />} />
        <Route path="/videosAdmin" element={<VideosAdmin />} />
        <Route path="/noticiasCliente" element={<NewsComponent />} />
      </Routes>
    </Router>
  );
}

export default AppAdministrador;
