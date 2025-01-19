const input = document.getElementById('input');
const enterButton = document.getElementById('enter');
const foodList = document.getElementById('food-list');

// Function to create a new food item
function createFoodItem(foodName) {
    // Create li element
    const li = document.createElement('li');
    li.className = 'food-item';
    li.textContent = foodName;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.className = 'delete-btn';

    // Append delete button to li
    li.appendChild(deleteButton);

    // Append li to ul
    foodList.appendChild(li);
}

//To delete item from list
foodList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const li = event.target.parentNode; 
        li.remove(); 
    }
});

//To enter item on list after clicking enter
enterButton.addEventListener('click', () => {
    const foodName = input.value.trim();
    if (foodName !== '') {
        createFoodItem(foodName);
        input.value = '';
    }
});

//To enter item on list after pressing enter in keyboard
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        enterButton.click();
    }
});