
// Function to handle signup form submission
function handleSignup(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    const firstName = document.getElementById('inputFirstName').value;
    const lastName = document.getElementById('inputLastName').value;
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    
    // Function to validate email using regex
    function validateEmail(email) {
        const regex1 = /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/;
        return regex1.test(String(email).toLowerCase());
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Function to validate password using regex
    function validatePassword(password) {
        // Password must be at least 8 characters, containing at least one uppercase letter, one lowercase letter, one number, and one special character
        const regex2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}\-\[\]:;<,>.?\/\\])(?=.*[a-zA-Z]).{8,}$/;
        return regex2.test(password);
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return;
    }

    // Storing user data in localStorage
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    // Store user data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Sign up successful! Please log in.');

    // Redirect to login page
    window.location.href = 'mlogin.html';
}

// Event listener for form submission
document.getElementById('signupForm').addEventListener('submit', handleSignup);
