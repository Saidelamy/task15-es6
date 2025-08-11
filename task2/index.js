const buttonContainer = document.querySelector(".buttonContainer");
const postsContainer = document.querySelector(".postsContainer");

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.map((user) => {
        // console.log(user);
        const btn = document.createElement("button");
        btn.textContent = user.name;
        btn.addEventListener("click", () => getPostsOfEachUser(user.id));
        buttonContainer.appendChild(btn);
      });
    })
    .catch((error) => {
      // console.log(error);
      return error;
    });
}

async function getPostsOfEachUser(userId) {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (response) {
      let data = await response.json();
      // console.log(data);

      postsContainer.innerHTML = data.map((post) => {
        return `<div class='postContainr'>
          <p>Post ID :  ${post.id}</p> 
          <p>User ID :  ${post.userId}</p>
          <h1>${post.title}</h1>
          <p>${post.body}</p>
        </div>`;
      });
    } else {
      throw new Error("Error happen during fetch posts: no response");
    }
  } catch (error) {
    // console.log(error);
    postsContainer.innerHTML = `<h1>${error.message}</h1>`;
  }
}
fetchUsers();
