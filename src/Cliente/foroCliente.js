import React, { useState } from "react";
import "./styleForo.css";

const Foro = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addPost = () => {
    if (title && content) {
      const newPost = {
        title: title,
        content: content,
        comments: [],
      };
      setPosts([...posts, newPost]);
      setTitle("");
      setContent("");
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  const addComment = (index, commentContent) => {
    if (commentContent) {
      const newPosts = [...posts];
      newPosts[index].comments.push(commentContent);
      setPosts(newPosts);
    } else {
      alert("Por favor, escribe un comentario.");
    }
  };

  return (
    <div className="container">
      <h1>Foro</h1>
      <div className="Coment">
        <h2>¿Tienes alguna duda?</h2>
        <p>
          Deja tu comentario, duda o consulta en nuestro espacio de comentarios.
        </p>
        <div className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
          />
        </div>
        <div className="form-group">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
            placeholder="Contenido"
          ></textarea>
        </div>
        <div className="form-group">
          <button onClick={addPost}>Publicar</button>
        </div>
        <div id="posts">
          {posts.map((post, index) => (
            <div key={index} className="post">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <div className="comments">
                {post.comments.map((comment, commentIndex) => (
                  <div key={commentIndex} className="comment">
                    <p>{comment}</p>
                  </div>
                ))}
              </div>
              <div className="comment-form">
                <textarea
                  id={`comment-content-${index}`}
                  rows="2"
                  placeholder="Escribe un comentario"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      addComment(index, e.target.value);
                      e.target.value = "";
                    }
                  }}
                ></textarea>
                <button
                  onClick={() => {
                    const commentContent = document.getElementById(
                      `comment-content-${index}`
                    ).value;
                    addComment(index, commentContent);
                    document.getElementById(`comment-content-${index}`).value =
                      "";
                  }}
                >
                  Comentar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foro;
