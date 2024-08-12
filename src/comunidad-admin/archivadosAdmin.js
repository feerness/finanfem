import React, { useState } from "react";
import "./archivadosAdmin.css";

const posts = [
  {
    title: "TU MAMÁ ES ######...",
    date: "09 de Agosto del 2024",
    comments: 3,
    status: "baneado3",
    username: "@1234",
  },
  {
    title: "TU PAPÁ ES #######...",
    date: "10 de Agosto del 2024",
    comments: 5,
    status: "advertido3",
    username: "@5678",
  },
  {
    title: "EL CLIMA ESTÁ #######...",
    date: "11 de Agosto del 2024",
    comments: 2,
    status: "baneado3",
    username: "@9876",
  },
  {
    title: "MI GATO ES #######...",
    date: "12 de Agosto del 2024",
    comments: 8,
    status: "advertido3",
    username: "@4321",
  },
  {
    title: "MI PERRO ES #######...",
    date: "13 de Agosto del 2024",
    comments: 6,
    status: "baneado3",
    username: "@1122",
  },
  {
    title: "MI VECINO ES #######...",
    date: "14 de Agosto del 2024",
    comments: 4,
    status: "advertido3",
    username: "@2345",
  },
  {
    title: "MI COCHE ES #######...",
    date: "15 de Agosto del 2024",
    comments: 7,
    status: "baneado3",
    username: "@6789",
  },
  {
    title: "MI CASA ES #######...",
    date: "16 de Agosto del 2024",
    comments: 9,
    status: "advertido3",
    username: "@3456",
  },
  {
    title: "MI JARDÍN ES #######...",
    date: "17 de Agosto del 2024",
    comments: 10,
    status: "baneado3",
    username: "@7890",
  },
  {
    title: "MI LIBRO ES #######...",
    date: "18 de Agosto del 2024",
    comments: 3,
    status: "advertido3",
    username: "@9101",
  },
  {
    title: "MI HERMANO ES #######...",
    date: "19 de Agosto del 2024",
    comments: 1,
    status: "baneado3",
    username: "@2222",
  },
  {
    title: "MI HERMANA ES #######...",
    date: "20 de Agosto del 2024",
    comments: 12,
    status: "advertido3",
    username: "@3333",
  },
  {
    title: "MI PRIMO ES #######...",
    date: "21 de Agosto del 2024",
    comments: 6,
    status: "baneado3",
    username: "@4444",
  },
  {
    title: "MI TÍO ES #######...",
    date: "22 de Agosto del 2024",
    comments: 7,
    status: "advertido3",
    username: "@5555",
  },
  {
    title: "MI TÍA ES #######...",
    date: "23 de Agosto del 2024",
    comments: 2,
    status: "baneado3",
    username: "@6666",
  },
  {
    title: "MI VECINA ES #######...",
    date: "24 de Agosto del 2024",
    comments: 9,
    status: "advertido3",
    username: "@7777",
  },
  {
    title: "MI JEFE ES #######...",
    date: "25 de Agosto del 2024",
    comments: 4,
    status: "baneado3",
    username: "@8888",
  },
  {
    title: "MI PROFESOR ES #######...",
    date: "26 de Agosto del 2024",
    comments: 8,
    status: "advertido3",
    username: "@9999",
  },
  {
    title: "MI DOCTOR ES #######...",
    date: "27 de Agosto del 2024",
    comments: 11,
    status: "baneado3",
    username: "@0000",
  },
  {
    title: "MI ENEMIGO ES #######...",
    date: "28 de Agosto del 2024",
    comments: 10,
    status: "advertido3",
    username: "@1111",
  },
];

const postsPerPage = 10;

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const currentPosts = posts.slice(start, end);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="app-body3">
      <div className="container3">
        <h1 className="title3">Publicaciones Archivadas</h1>
        <div className="scroll-container3">
          {currentPosts.map((post, index) => (
            <div className="post3" key={index}>
              <img className="post-icon3" src="./icon.png" alt="Icono" />
              <p className="post-title3">{post.title}</p>
              <p className="post-date3">{post.date}</p>
              <p className="post-comments3">{post.comments} Comentarios</p>
              <div className={`usuario-${post.status}`}>
                <p className="user-status3">
                  Usuario <br /> {post.status.replace("3", "")}
                </p>
              </div>
              <p className="post-username3">{post.username}</p>
              <a className="post-link3" href="/">
                Ver más
              </a>
            </div>
          ))}
        </div>
        <div className="pagination3">
          <a
            href="/"
            className={`page-link3 prev ${currentPage === 1 ? "disabled" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) goToPage(currentPage - 1);
            }}
          >
            &laquo; Anterior
          </a>

          {[...Array(totalPages)].map((_, index) => (
            <a
              href="/"
              key={index}
              className={`page-link3 ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                goToPage(index + 1);
              }}
            >
              {index + 1}
            </a>
          ))}

          <a
            href="/"
            className={`page-link3 next ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) goToPage(currentPage + 1);
            }}
          >
            Siguiente &raquo;
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
