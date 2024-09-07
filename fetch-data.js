async function fetchUserData() {
    // Define API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select Data Container Element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch Data Using Fetch API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear Loading Message
        dataContainer.innerHTML = '';

        // Create User List
        const userList = document.createElement('ul');
        userList.classList.add('user-list');

        // Loop through users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append User List to Data Container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle Errors
        console.error('Failed to fetch user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
});