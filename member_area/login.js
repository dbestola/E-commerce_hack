function CustomAlert(message, callback) {
    
    // alert container
    const alertContainer = document.createElement('div');
    alertContainer.className = 'custom-alert';

    // alert message
    const alertMessage = document.createElement('p');
    alertMessage.textContent = message;
    alertContainer.appendChild(alertMessage);

    // close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'OK';
    closeButton.className = 'custom-alert-button';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(alertContainer);
        if (callback) callback();
    });
    alertContainer.appendChild(closeButton);

    // Append alert to body
    document.body.appendChild(alertContainer);

    // Automatically remove the alert after 3 seconds 
    setTimeout(() => {
        if (document.body.contains(alertContainer)) {
            document.body.removeChild(alertContainer);
            if (callback) callback();
        }
    }, 3000);
}

//function to handle login form
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const loginEmail = document.getElementById('inputEmail').value.trim();
            const loginPassword = document.getElementById('inputPassword').value.trim();

            console.log(loginEmail, loginPassword);

            // Retrieve stored users array from localStorage
            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

            // Find the user with matching email and password
            const user = storedUsers.find(user => user.email === loginEmail && user.password === loginPassword);

            if (user) {
                // Successful login
                CustomAlert('Login successful! Redirecting to dashboard.', function() {
                    window.location.href = 'mprofile.html';
                });
            } else {
                // Incorrect credentials
                displayError('inputEmail', 'Invalid email or password. Please try again.', 3000);
                displayError('inputPassword', 'Invalid email or password. Please try again.', 3000);
            }
        });
    }
});

