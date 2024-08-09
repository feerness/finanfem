import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEllipsisV } from 'react-icons/fa';
import './articulosAdmin.css'

const ArticleCard = ({ title, image, description, link }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Leer más</a>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="d-inline-block">
              <DropdownToggle tag="span"
                onClick={toggleDropdown}
                data-toggle="dropdown"
                aria-expanded={dropdownOpen}
                style={{ cursor: 'pointer' }}>
                <FaEllipsisV />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Editar</DropdownItem>
                <DropdownItem>Eliminar</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

const Articles = () => {
  const articles = [
    {
      title: 'Diccionario de Economía y Finanzas',
      image: 'img/webtoon2.jpeg',
      description: 'Explora los conceptos clave de la economía y las finanzas en este completo diccionario.',
      link: 'https://www.eleconomista.es/diccionario-de-economia/finanzas',
    },
    {
      title: 'Plataforma de Trading',
      image: 'img/webtoon1.jpeg',
      description: 'Descubre las mejores plataformas de trading y cómo utilizarlas para maximizar tus inversiones.',
      link: 'https://supercoin.it/cl-trading-platform/16262?sorgente=2&gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXHez5OOJkZ7Ds70GaWV6OQpsk9WbaQXQGCiJ-tCe2aA2aS33aP1LMhoCejMQAvD_BwE',
    },
    {
      title: 'Educación Financiera CMF Chile',
      image: 'img/webtoon3.jpeg',
      description: 'Accede a recursos educativos sobre finanzas proporcionados por la Comisión para el Mercado Financiero de Chile.',
      link: 'https://www.cmfchile.cl/educa/621/w3-article-830.html',
    },
  ];

  return (
    <section className="content py-5">
      <div className="container">
        <div className="header">
          <h2>Artículos</h2>
        </div>
        <div className="add-article">
          <button className="add-task-button">Añadir tarea</button>
        </div>
        <div className="info-header">
          <p>Encuentra artículos sobre finanzas y empoderamiento económico.</p>
        </div>
        <div className="row">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              image={article.image}
              description={article.description}
              link={article.link}
            />
          ))}
        </div>
      </div>
    </section>

  );
};

export default Articles;
