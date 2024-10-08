import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./home-html/NavbarCliente";
import Herramientas from "./Herramientas-html/herramientas"; // Asegúrate de que el nombre del archivo coincida con la importación
import ArticulosCliente from "./recursos-cliente/articulosCliente";
import PdfCliente from "./recursos-cliente/pdfCliente";
import VideosCliente from "./recursos-cliente/videosCliente";
import NotificacionCliente from "./Foro/notificacionCliente";
import Terminos from "./terminos-normas/Terminos";
import NewsComponent from "./noticias/noticiasCliente";
import ReportesCliente from "./consultoria-cliente/reportesCliente";
import HomePageCliente from "./LandingPageC";

function AppCliente() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPageC />} /> 
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/articulosCliente" element={<ArticulosCliente />} />
        <Route path="/pdfCliente" element={<PdfCliente />} />
        <Route path="/videosCliente" element={<VideosCliente />} />
        <Route path="/perfilesCliente" element={<NotificacionCliente />} />
        <Route path="/actividadCliente" element={<Terminos />} />
        <Route path="/noticiasCliente" element={<NewsComponent />} />
        <Route path="/reportesCliente" element={<ReportesCliente />} />
      </Routes>
    </Router>
  );
}

export default AppCliente;
