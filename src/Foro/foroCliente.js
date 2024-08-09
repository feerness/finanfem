
let posts = [];

function addPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title && content) {
        const post = {
            title: title,
            content: content,
            comments: [],
        };
        posts.push(post);
        renderPosts();

        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

function addComment(postIndex) {
    const commentContent = document.getElementById(`comment-content-${postIndex}`).value;

    if (commentContent) {
        posts[postIndex].comments.push(commentContent);

        renderPosts();
    } else {
        alert("Por favor, escribe un comentario.");
    }
}

function renderPosts() {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";

    posts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <div class="comments">
                ${post.comments.map(comment => `<div class="comment"><p>${comment}</p></div>`).join("")}
            </div>
            <div class="comment-form">
                <textarea id="comment-content-${index}" rows="2" placeholder="Escribe un comentario"></textarea>
                <button class="B2" onclick="addComment(${index})">Comentar</button>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}