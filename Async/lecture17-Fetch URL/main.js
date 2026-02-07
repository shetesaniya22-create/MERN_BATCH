

function clearLoader() {
document.getElementById("status").textContent = "";
}


function fetchPosts(postId) {
return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => {
    if (!response.ok) {
        throw new Error("Post not found");
    }
    return response.json();
    });
}
function showLoader() {
document.getElementById("status").textContent = "Loading...";
}


function fetchComments(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json());
}


function showPosts(post) {
  const postSection = document.getElementById("post");

  postSection.innerHTML = `
    <article>
      <h1>${post.title}</h1>
      <p>${post.body}</p>

      <h2>Comments</h2>
      <ul id="comment-list"></ul>
    </article>
  `;

  // Pass post id to next .then()
  return post.id;
}

function showComments(comments) {
  const list = document.getElementById("comment-list");

  comments.forEach(comment => {
    const li = document.createElement("li");
    li.textContent = comment.body;
    list.appendChild(li);
  });

  // optional return
  return comments;
}


document.getElementById("show").addEventListener("click", function () {
  const postId = document.getElementById("posts-id").value;

  if (!postId) {
    alert("Please enter a post id");
    return;
  }

  showLoader();

  fetchPosts(postId)
    .then(showPosts)
    .then(fetchComments)
    .then(showComments)
    .catch(error => {
      document.getElementById("post").textContent = error.message;
    })
    .finally(clearLoader);
});
