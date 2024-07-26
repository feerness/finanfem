import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './home-html/Navbar';
import Herramientas from './Herramientas-html/herramientas'; // Asegúrate de que el nombre del archivo coincida con la importación

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/herramientas" element={<Herramientas />} />
        {/* Agrega otras rutas aquí si es necesario */}
      </Routes>
    </Router>
  );
}

export default App;

