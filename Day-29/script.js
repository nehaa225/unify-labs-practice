// Load posts when page opens
window.onload = loadPosts;

// Get posts from LocalStorage
function getPosts() {
    return JSON.parse(localStorage.getItem("zenithPosts")) || [];
}

// Save posts to LocalStorage
function savePosts(posts) {
    localStorage.setItem("zenithPosts", JSON.stringify(posts));
}

// Load and display posts
function loadPosts() {
    const blogContainer = document.getElementById("blogContainer");
    const posts = getPosts();

    blogContainer.innerHTML = "";

    posts.forEach((post, index) => {
        blogContainer.innerHTML += `
            <div class="post-card">
                <h3>${post.title}</h3>
                <small>By ${post.author} | ${post.date}</small>
                <p>${post.content}</p>
                <button class="delete-btn" onclick="deletePost(${index})">Delete</button>
            </div>
        `;
    });
}

// Handle form submission
document.getElementById("postForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const content = document.getElementById("content").value;

    const newPost = {
        title,
        author,
        content,
        date: new Date().toLocaleString()
    };

    const posts = getPosts();
    posts.push(newPost);
    savePosts(posts);

    this.reset();
    loadPosts();
});

// Delete post
function deletePost(index) {
    const posts = getPosts();
    posts.splice(index, 1);
    savePosts(posts);
    loadPosts();
}