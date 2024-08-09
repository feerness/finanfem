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
          <div className="col-md-3">
            <h5>Sobre Nosotras</h5>
            <p>
              FinanFem es una plataforma para mujeres por mujeres para mejorar
              la educación financiera de ellas.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Contáctanos</h5>
            <ul className="list-unstyled">
              <li>Email: bytegyals@gmail.com</li>
              <li>Teléfono: +1233567890</li>
              <li>Dirección: Calle 123, Santiago, Chile.</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Síguenos</h5>
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
          <div className="col-md-12">
            <p>© 2024 ByteGyals.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
