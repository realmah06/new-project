let footer = document.getElementById("footer").innerHTML = `<p>&copy; 2023 A.A Mujaheed Global Enterprises. All rights reserved.</p><p>Developed by: <a href="https://wa.me/+2347046245050">Mahadi Abubakar Mujahid</a></p>`;

// Check if user is logged in when dashboard loads
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        window.location.href = '/index.html'; // Redirect to login page
    }
    
    // Add logout functionality
    const logoutBtn = document.getElementById('logoutBtn'); // Add a logout button to your dashboard
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('isLoggedIn');
            window.location.href = '/';
        });
    }
});