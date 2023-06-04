// Fetch data from API and display existing blogs
function fetchAndDisplayBlogs() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(blogs => {
      const blogContainer = document.getElementById('blogContainer');
      blogContainer.innerHTML = ''; // Clear existing blogs

      blogs.forEach(blog => {
        const blogElement = document.createElement('div');
        blogElement.innerHTML = `
          <h3>${blog.title}</h3>
          <p>${blog.body}</p>
          <button class="deleteBtn" data-id="${blog.id}">Delete</button>
        `;
        blogContainer.appendChild(blogElement);
      });

      // Attach event listeners to delete buttons
      const deleteButtons = document.getElementsByClassName('deleteBtn');
      Array.from(deleteButtons).forEach(button => {
        button.addEventListener('click', deleteBlog);
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

// Add a new blog
function addBlog(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  // Perform validation if required

  const newBlog = {
    title: title,
    body: body
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBlog)
  })
    .then(response => response.json())
    .then(data => {
      console.log('New blog added:', data);
      // Clear form fields
      document.getElementById('title').value = '';
      document.getElementById('body').value = '';
      fetchAndDisplayBlogs(); // Refresh the blogs
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

// Delete a blog
function deleteBlog() {
  const blogId = this.dataset.id;

  fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        console.log(`Blog with ID ${blogId} deleted`);
        fetchAndDisplayBlogs(); // Refresh the blogs
      } else {
        throw new Error('Failed to delete blog');
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

// Attach event listener to the add blog form submit
document.getElementById('addBlogForm').addEventListener('submit', addBlog);

// Fetch and display existing blogs on page load
fetchAndDisplayBlogs();
