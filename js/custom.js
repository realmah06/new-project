let footer = document.getElementById("footer").innerHTML = `<p>&copy; 2023 A.A Mujaheed Global Enterprises. All rights reserved.</p><p>Developed by: <a href="https://wa.me/+2347046245050">Mahadi Abubakar Mujahid</a></p>`;
 document.addEventListener('DOMContentLoaded', function() {
            const tabs = document.querySelectorAll('.side-bar a');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all tabs
                    tabs.forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Hide all tab contents
                    document.querySelectorAll('.tab-content').forEach(content => {
                        content.classList.remove('active');
                    });
                    
                    // Show the selected tab content
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
        });

        const sideBar = document.getElementById('sideBar');
        const showMenu = document.getElementById('showMenu');
        const hideMenu = document.getElementById('hideMenu');

        showMenu.addEventListener('click', function() {
            sideBar.style.display = 'block';
            showMenu.style.display = 'none';
            hideMenu.style.display = 'inline-block';
        });
        hideMenu.addEventListener('click', function() {
            sideBar.style.display = 'none';
            showMenu.style.display = 'inline-block';
            hideMenu.style.display = 'none';
        });