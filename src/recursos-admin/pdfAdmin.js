import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEllipsisV } from "react-icons/fa";
import "./articulosAdmin.css";

const PdfCard = ({ title, image, description, link, onEdit, onDelete }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <a
              href={link}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer más
            </a>
            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggleDropdown}
              className="d-inline-block"
            >
              <DropdownToggle
                tag="span"
                onClick={toggleDropdown}
                data-toggle="dropdown"
                aria-expanded={dropdownOpen}
                style={{ cursor: "pointer" }}
              >
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

const PdfAdmin = () => {
  const [pdfs, setPdfs] = useState([
    {
      title: "Finanzas empresariales para la pequeña y microempresa",
      image: "images/image.png",
      description:
        "Finanzas empresariales para la pequeña y microempresa, proporciona un marco conceptual sobre el rol de las finanzas en la empresa, el papel del directivo financiero y los principios financieros relevantes.",
      link: "file:///C:/Users/flafy/Downloads/Finanzas%20empresariales%20para%20la%20pequeña%20y%20microempresa,%20Mauricio%20Meza%20Riquelme.pdf",
    },
    {
      title: "Finanzas para todos. Lectura Fácil",
      image: "images/image1.png",
      description:
        "Finanzas para todos. Lectura Fácil es un documento que presenta de manera accesible y comprensible los conceptos financieros y consejos prácticos para gestionar el dinero en diferentes etapas de la vida.",
      link: "file:///C:/Users/flafy/Downloads/Cuadernillo%20de%20educación%20financiera%20infantil,%20Joaquín%20Disla.pdf",
    },
    {
      title: "Su dinero y futuro económico: una guía para ahorrar",
      image: "/images/image2.png",
      description:
        "Su dinero y futuro económico: una guía para ahorrar es una guía que aborda la importancia del ahorro y la planificación financiera, especialmente para la jubilación.",
      link: "file:///C:/Users/flafy/Downloads/Enseñando%20a%20los%20jóvenes%20sobre%20el%20dinero%20autor%20Federal%20Deposit%20Insurance%20Corporation.pdf",
    },
    {
      title:
        "Tu dinero ¡tu futuro!, guía básica de educación y empoderamiento Financiero",
      image: "/images/image3.png",
      description:
        "Tu dinero ¡tu futuro!, guía básica de educación y empoderamiento Financiero es una guía introductoria que proporciona información y consejos básicos sobre el sistema financiero, metas financieras, presupuesto, ahorro, crédito, impuestos, fraudes y estafas, y otros recursos.",
      link: "https://www.economicas.unsa.edu.ar/afinan/informacion_general/book/princ_de_finanzas_corporativas_9ed__myers.pdf",
    },
    {
      title: "Cuadernillo de educación financiera infantil",
      image: "/images/image5.png",
      description:
        "Cuadernillo de Educación Financiera Infantil es una introducción al mundo de la educación financiera dirigida a niños. Contiene temas relacionados con el dinero, el trabajo, la administración del dinero, el presupuesto, el ahorro, el consumo, la sociedad de consumo y la violencia económica.",
      link: "https://www.economicas.unsa.edu.ar/afinan/informacion_general/book/princ_de_finanzas_corporativas_9ed__myers.pdf",
    },
    {
      title: " Enseñando a los jóvenes sobre el dinero",
      image: "/images/image4.png",
      description:
        "Enseñando a los jóvenes sobre el dinero, proporciona consejos para padres y cuidadores sobre educación financiera para niños y jóvenes. Aborda temas como la administración del dinero, ahorro, decisiones financieras y protección contra el robo de identidad.",
      link: "https://www.economicas.unsa.edu.ar/afinan/informacion_general/book/princ_de_finanzas_corporativas_9ed__myers.pdf",
    },
  ]);

  const handleEdit = (index) => {
    const newTitle = prompt("Editar título del e-book:", pdfs[index].title);
    if (newTitle) {
      const updatedPdfs = [...pdfs];
      updatedPdfs[index].title = newTitle;
      setPdfs(updatedPdfs);
    }
  };

  const handleDelete = (index) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este e-book?")) {
      const updatedPdfs = pdfs.filter((_, i) => i !== index);
      setPdfs(updatedPdfs);
    }
  };

  const handleAdd = () => {
    const newTitle = prompt("Título del nuevo e-book:");
    const newDescription = prompt("Descripción del nuevo e-book:");
    const newLink = prompt("Link del nuevo e-book:");
    if (newTitle && newDescription && newLink) {
      setPdfs([
        ...pdfs,
        {
          title: newTitle,
          image: "images/default.png",
          description: newDescription,
          link: newLink,
        },
      ]);
    }
  };

  return (
    <section className="content py-5">
      <div className="container">
        <div className="header">
          <h2>E-books y Guías</h2>
        </div>
        <div className="add-article">
          <button className="add-task-button" onClick={handleAdd}>
            Añadir e-book
          </button>
        </div>
        <div className="info-header">
          <p>
            Descarga nuestros e-books y guías para aprender más sobre finanzas.
          </p>
        </div>
        <div className="row">
          {pdfs.map((pdf, index) => (
            <PdfCard
              key={index}
              title={pdf.title}
              image={pdf.image}
              description={pdf.description}
              link={pdf.link}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PdfAdmin;
