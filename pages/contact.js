function CustomAlert(message) {
    const alertContainer = document.createElement('div');
    alertContainer.className = 'custom-alert';

    const alertMessage = document.createElement('p');
    alertMessage.textContent = message;
    
    const closeButton = document.createElement('button');
    closeButton.textContent = 'OK';
    closeButton.className = 'custom-alert-button';

    alertContainer.appendChild(alertMessage);
    alertContainer.appendChild(closeButton);

    document.body.appendChild(alertContainer);

    closeButton.addEventListener('click', function() {
        document.body.removeChild(alertContainer);
        setTimeout(function() {
            if (document.body.contains(alertContainer)) {
                document.body.removeChild(alertContainer);
            }
        }, 5000);
    });
}
 


document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    document.getElementById('btn').addEventListener('click', function() {
        CustomAlert('You have signed up successfully!');
       
    });
});
    

// document.addEventListener('DOMContentLoaded', () => {
//         document.getElementById('myForm').addEventListener('submit', function(event) {
//             event.preventDefault(); // Prevent form from submitting and reloading the page
//             CustomAlert('You have signed up successfully!');
//         });
//     });
    
//     function CustomAlert(message) {
//         const alertContainer = document.createElement('div');
//         alertContainer.className = 'custom-alert';
    
//         const alertMessage = document.createElement('p');
//         alertMessage.textContent = message;
        
//         const closeButton = document.createElement('button');
//         closeButton.textContent = 'OK';
//         closeButton.className = 'custom-alert-button';
    
//         alertContainer.appendChild(alertMessage);
//         alertContainer.appendChild(closeButton);
    
//         document.body.appendChild(alertContainer);
    
//         // Event listener for the close button
//         closeButton.addEventListener('click', function() {
//             document.body.removeChild(alertContainer);
//         });
    
//         // Auto-remove the alert after 5 seconds (5000 milliseconds)
//         setTimeout(function() {
//             if (document.body.contains(alertContainer)) {
//                 document.body.removeChild(alertContainer);
//             }
//         }, 5000);
//     }
    





