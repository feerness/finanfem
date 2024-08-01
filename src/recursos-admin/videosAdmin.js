import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEllipsisV } from 'react-icons/fa';
import './articulosAdmin.css';

const VideoCard = ({ title, description, videoUrl, onEdit, onDelete }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card h-100">
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="315px"
          controls={true}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="d-inline-block">
              <DropdownToggle tag="span"
                onClick={toggleDropdown}
                data-toggle="dropdown"
                aria-expanded={dropdownOpen}
                style={{ cursor: 'pointer' }}>
                <FaEllipsisV />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={onEdit}>Editar</DropdownItem>
                <DropdownItem onClick={onDelete}>Eliminar</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideosAdmin = () => {
  const [videos, setVideos] = useState([
    {
      title: 'La Manera Más Fácil para Entender las Finanzas',
      description: 'Explora los conceptos clave de la economía y las finanzas en este completo diccionario.',
      videoUrl: 'https://www.youtube.com/watch?v=dUiZ5is-Chw',
    },
    {
      title: 'CONTABILIDAD DEL HOGAR EN EXCEL FÁCIL Y PRÁCTICO | PLANTILLA DESCARGABLE GRATIS:',
      description: 'Descubre las mejores plataformas de trading y cómo utilizarlas para maximizar tus inversiones.',
      videoUrl: 'https://www.youtube.com/watch?v=QKH_RylEMEU',
    },
    {
        title: 'Pequeños LADRONES que te roban el DINERO - Gastos Hormiga',
        description: 'Accede a recursos educativos sobre finanzas proporcionados por la Comisión para el Mercado Financiero de Chile.',
        videoUrl: 'https://www.youtube.com/watch?v=5tL96a8FZU4',
      },
      {
        title: 'Aprende a gestionar MEJOR tu dinero con LA REGLA 50/30/20',
        description: 'Accede a recursos educativos sobre finanzas proporcionados por la Comisión para el Mercado Financiero de Chile.',
        videoUrl: 'https://www.youtube.com/watch?v=_bgUUswBttU',
      },
      {
        title: 'Finanzas en pareja:',
        description: 'Accede a recursos educativos sobre finanzas proporcionados por la Comisión para el Mercado Financiero de Chile.',
        videoUrl: 'https://www.youtube.com/watch?v=g8TUvldg8L4',
      },
      {
        title: 'Pequeños LADRONES que te roban el DINERO - Gastos Hormiga',
        description: 'Accede a recursos educativos sobre finanzas proporcionados por la Comisión para el Mercado Financiero de Chile.',
        videoUrl: 'https://www.youtube.com/watch?v=29iU2NA0rDQ',
      },
  ]);

  const handleEdit = (index) => {
    const newTitle = prompt("Editar título del video:", videos[index].title);
    if (newTitle) {
      const updatedVideos = [...videos];
      updatedVideos[index].title = newTitle;
      setVideos(updatedVideos);
    }
  };

  const handleDelete = (index) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este video?")) {
      const updatedVideos = videos.filter((_, i) => i !== index);
      setVideos(updatedVideos);
    }
  };

  const handleAdd = () => {
    const newTitle = prompt("Título del nuevo video:");
    const newDescription = prompt("Descripción del nuevo video:");
    const newVideoUrl = prompt("URL del nuevo video:");
    if (newTitle && newDescription && newVideoUrl) {
      setVideos([...videos, { title: newTitle, description: newDescription, videoUrl: newVideoUrl }]);
    }
  };

  return (
    <section className="content py-5">
      <div className="container">
        <div className="header">
          <h2>Videos</h2>
        </div>
        <div className="add-article">
          <button className="add-task-button" onClick={handleAdd}>Añadir video</button>
        </div>
        <div className="info-header">
          <p>Encuentra videos sobre finanzas y empoderamiento económico.</p>
        </div>
        <div className="row">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              description={video.description}
              videoUrl={video.videoUrl}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosAdmin;
