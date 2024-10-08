import React from "react";
import "./Footer.css";


const MyFooter = () => {
  return (
    <footer className="footer p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2>FinanFem</h2>
          </div>
          <div className="col-md-2">
            <h5>Información</h5>
            <ul className="list-unstyled">
              <li>Acerca de nosotras</li>
              <li>Testimonios</li>
              <li></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Links de Ayuda</h5>
            <ul className="list-unstyled">
              <li>Indicadores Financieros</li>
              <li>Recursos</li>
              <li>Archivos</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Nuestros Servicios</h5>
            <ul className="list-unstyled">
              <li>Perfil</li>
              <li>Foro</li>
              <li>Noticias</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contacto</h5>
            <ul className="list-unstyled contact-info">
              <li><i className="fas fa-phone"></i> +569 3567 8910</li>
              <li><i className="fas fa-envelope"></i> contacto@finanfem.cl</li>
              <li><i className="fas fa-map-marker-alt"></i> Calle 123, Santiago, Chile</li>
            </ul>
            <ul className="list-inline footer-links">
              <li className="list-inline-item">
                <a href="https://www.google.cl">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.google.cl">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.google.cl">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.google.cl">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>© 2024 FinanFem. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default MyFooter;