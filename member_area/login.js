// Function to handle login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
  
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
  
            const loginEmail = document.getElementById('inputEmail').value;
            const loginPassword = document.getElementById('inputPassword').value;

            console.log(loginEmail, loginPassword);

            // Retrieve stored user data
            const storedUser = JSON.parse(localStorage.getItem('userData'));

            if (storedUser && loginEmail === storedUser.email && loginPassword === storedUser.password) {
                // Successful login
                alert('Login successful! Redirecting to dashboard.');
                window.location.href = 'dashboard.html';
            } else {
                // Incorrect credentials
                alert('Invalid email or password. Please try again.');
            }
        });
    }
});
