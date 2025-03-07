// Function to add a new blog
function addBlog() {
    const blogContent = document.getElementById('blogContent').value.trim();
    if (blogContent === '') {
        alert('Blog content cannot be empty!');
        return;
    }

    const blogsContainer = document.getElementById('blogs');
    const blogItem = document.createElement('div');
    blogItem.className = 'blog-item';

    const blogText = document.createElement('p');
    blogText.innerText = blogContent;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => blogsContainer.removeChild(blogItem);

    blogItem.appendChild(blogText);
    blogItem.appendChild(deleteButton);

    blogsContainer.appendChild(blogItem);

    // Clear the textarea after adding a blog
    document.getElementById('blogContent').value = '';
}
