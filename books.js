// Get references to DOM elements
const input = document.getElementById('input');
const enterButton = document.getElementById('enter');
const bookList = document.getElementById('book-list');

// Function to create a new book item
function createBookItem(bookName) {
    // Create a new list item element
    const li = document.createElement('li');
    li.className = 'book-item';
    li.textContent = bookName;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.className = 'delete-btn';

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the book list
    bookList.appendChild(li);
}

// Event listener to delete a book item
bookList.addEventListener('click', (event) => {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains('delete-btn')) {
        const li = event.target.parentNode; // Get the parent list item
        li.remove(); // Remove the list item
    }
});

// Event listener to add a new book item when clicking the "Enter" button
enterButton.addEventListener('click', () => {
    const bookName = input.value.trim(); // Get the input value and trim whitespace
    if (bookName !== '') {
        createBookItem(bookName); // Create and add the new book item
        input.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid book name!'); // Show an alert for invalid input
    }
});

// Event listener to add a new book item when pressing the "Enter" key
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        enterButton.click(); // Trigger the click event of the "Enter" button
    }
});
