import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./home-html/Navbar";
import Herramientas from "./Herramientas-html/herramientas";
import ArticulosAdmin from "./recursos-admin/articulosAdmin";
import PdfAdmin from "./recursos-admin/pdfAdmin";
import VideosAdmin from "./recursos-admin/videosAdmin";
import NewsComponent from "./noticias/noticiasCliente";
import HomeAdmin from "./home-admin/HomeAdmin";
import ArchivadoAdmin from "./comunidad-admin/archivadosAdmin";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeAdmin />} />{" "}
        {/* Ruta raíz para HomeAdmin */}
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/articulosAdmin" element={<ArticulosAdmin />} />
        <Route path="/pdfAdmin" element={<PdfAdmin />} />
        <Route path="/videosAdmin" element={<VideosAdmin />} />
        <Route path="/noticiasCliente" element={<NewsComponent />} />
        <Route path="/inicio" element={<HomeAdmin />} />{" "}
        <Route path="/archivadosAdmin" element={<ArchivadoAdmin />} />
        {/* Ruta específica para HomeAdmin, opcional si necesitas acceder a ella directamente */}
      </Routes>
    </Router>
  );
}

export default App;
