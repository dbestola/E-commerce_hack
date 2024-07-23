document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.sidebar a');
    const accountForm = document.getElementById('account-form');
    const closeAccountBtn = document.getElementById('close-account-btn');
    const logoutBtn = document.getElementById('logout-btn');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = event.target.dataset.section;
            showSection(sectionId);
        });
    });

    showSection('orders');

    function loadUserData() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            document.getElementById('name').value = user.name;
            document.getElementById('email').value = user.email;
            document.getElementById('password').value = user.password;
            document.getElementById('address').value = user.address;
        }
    }

    accountForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(accountForm);
        const updatedAccountData = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            address: formData.get('address')
        };
        localStorage.setItem('user', JSON.stringify(updatedAccountData));
        alert('Account updated successfully!');
    });

    closeAccountBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to close your account? This action cannot be undone.')) {
            localStorage.removeItem('user');
            alert('Your account has been closed.');
            window.location.href = 'login.html';
        }
    });

    logoutBtn.addEventListener('click', () => {
        alert('You have been logged out.');
        window.location.href = 'login.html';
    });

    function loadOrders() {
        const ongoingOrdersList = document.getElementById('ongoing-orders');
        const deliveredOrdersList = document.getElementById('delivered-orders');
        const orders = JSON.parse(localStorage.getItem('orders')) || [
            { id: 1, item: 'Laptop', status: 'Shipped' },
            { id: 2, item: 'Phone', status: 'Delivered' },
            { id: 3, item: 'Tablet', status: 'Processing' }
        ];
        orders.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.innerText = `Order #${order.id}: ${order.item} - ${order.status}`;
            if (order.status === 'Delivered') {
                deliveredOrdersList.appendChild(orderElement);
            } else {
                ongoingOrdersList.appendChild(orderElement);
            }
        });
    }

    function loadInbox() {
        const inboxList = document.getElementById('inbox-list');
        const messages = JSON.parse(localStorage.getItem('messages')) || [
            { id: 1, sender: 'Admin', subject: 'Welcome to our service!' },
            { id: 2, sender: 'Support', subject: 'Your order has been shipped' }
        ];
        messages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.innerText = `Message #${message.id} from ${message.sender}: ${message.subject}`;
            inboxList.appendChild(messageElement);
        });
    }

    loadUserData();
    loadOrders();
    loadInbox();
});
