function showLoader() {
document.getElementById("status").textContent = "Loading...";
}

function clearLoader() {
document.getElementById("status").textContent = "";
}

// Fetch single post
function fetchPost(postId) {
return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => {
    if (!response.ok) {
        throw new Error("Post not found");
    }
    return response.json();
    });
}

// Fetch comments for a post
function fetchComments(postId) {
return fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
).then(response => response.json());
}

// Fetch all users and attach random user to each comment
function fetchUser(comments) {
return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
    return comments.map(comment => {
        return {
        ...comment,
          user: users[Math.floor(Math.random() * users.length)]
        };
    });
    });
}

// Show post in UI
function showPost(post) {
const postSection = document.getElementById("post");

postSection.innerHTML = `
    <article>
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    <h3>Comments</h3>
    <ul id="comment-list"></ul>
    </article>
`;

  // pass postId to next then
return post.id;
}

// Show comments + user in UI
function showComments(comments) {
const list = document.getElementById("comment-list");

comments.forEach(comment => {
    const li = document.createElement("li");

    li.innerHTML = `
    <section>
    <h1>${comment.user.name}</h1>
    <p>${comment.user.email}</p>
    <p>${comment.body}</p>
    </section>
    `;

    list.appendChild(li);
});

return comments;
}

// Click handler
document.getElementById("show").addEventListener("click", () => {
const postId = document.getElementById("post-id").value.trim();

if (!postId) {
    alert("Please enter a post ID");
    return;
}

showLoader();

fetchPost(postId)
    .then(showPost)       // post → postId
    .then(fetchComments) // postId → comments
    .then(fetchUser)     // comments → comments + user
    .then(showComments)  // render comments
    .catch(error => {
    document.getElementById("post").textContent = error.message;
    })
    .finally(clearLoader);
});
