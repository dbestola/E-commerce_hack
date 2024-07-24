document.addEventListener('DOMContentLoaded', function() {
    const adminEmail = 'admin@mail.com';
    const adminPassword = 'password';
    

    const adminDetails = [
        {
            email: adminEmail,
            password: adminPassword
        }
    ];

    if (!localStorage.getItem('adminDetails')) {
        localStorage.setItem('adminDetails', JSON.stringify(adminDetails));
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('Vendor_loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const vendorLoginEmail = document.getElementById('VendorMail').value.trim();
            const vendorLoginPassword = document.getElementById('VendorPassword').value.trim();

            console.log(vendorLoginEmail, vendorLoginPassword);

            // Retrieve stored admin details from local storage
            const storedAdminDetails = JSON.parse(localStorage.getItem('adminDetails')) || [];

            console.log(storedAdminDetails);

            // Check if the supplied email and password match any stored admin details
            const admin = storedAdminDetails.find(admin => admin.email === vendorLoginEmail && admin.password === vendorLoginPassword);

            console.log('Found items:', admin);

            if (admin) {
                // Successful login
                alert('Login successful! Redirecting to dashboard.');
                localStorage.setItem('isAdminLoggedIn', 'true');
                localStorage.setItem('adminEmail', admin.email);
                window.location.href = '../index.html';
            } else {
                // Incorrect credentials
                alert('Invalid email or password. Please try again.');
            }
        });
    }
});


// check login status
document.addEventListener('DOMContentLoaded', () => {
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
      if (isAdminLoggedIn) {
        document.querySelector('.user-account').style.display = 'none'
        const profileAccount = document.createElement('div')
        profileAccount.className = 'profileAccount'
        profileAccount.innerHTML = `<span>Hi <span class="profileAccountName">Admin</span></span>`
        document.querySelector('.handleUserStates').appendChild(profileAccount)
        profileAccount.addEventListener('click', () =>{
          handleAdminProfile()
        })
      }
    })
  
    function handleAdminProfile() {
      window.location.href = 'pages/adminPannel/admin.html'
  }
  