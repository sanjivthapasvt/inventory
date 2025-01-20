const input = document.getElementById('input');
const enterButton = document.getElementById('enter');
const bookList = document.getElementById('book-list');

function createBookItem(bookName) {
    const li = document.createElement('li');
    li.className = 'book-item';
    li.textContent = bookName;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.className = 'delete-btn';

    li.appendChild(deleteButton);


    bookList.appendChild(li);
}

// to delete book
bookList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const li = event.target.parentNode; 
        li.remove(); 
    }
});

// add new book after pressing enter
enterButton.addEventListener('click', () => {
    const bookName = input.value.trim();
    if (bookName !== '') {
        createBookItem(bookName); 
        input.value = ''; 
    } else {
        alert('Please enter a valid book name!'); 
    }
});


input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        enterButton.click();
    }
});

