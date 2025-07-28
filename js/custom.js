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

        // Function to format the date as DD/MM/YYYY
        function formatDate(date) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }

        // Function to update all spans with class "current-date"
        function current() {
            const today = new Date();
            const formattedDate = formatDate(today);
            
            // Get all spans with the class "current-date"
            const dateSpans = document.querySelectorAll('span.current-date');
            
            // Update each span with the current date
            dateSpans.forEach(span => {
                span.textContent = formattedDate;
            });
        }

        // Call the function when the page loads
        window.onload = current;



        document.addEventListener('DOMContentLoaded', function() {
            // Get all modal triggers
            const modalTriggers = document.querySelectorAll('li[data-modal]');
            
            // Add click event to each trigger
            modalTriggers.forEach(trigger => {
                trigger.addEventListener('click', function() {
                    const modalId = this.getAttribute('data-modal') + '-modal';
                    const modal = document.getElementById(modalId);
                    
                    if (modal) {
                        modal.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    }
                });
            });
            
            // Close modal when clicking close button or outside
            document.querySelectorAll('.modal-popup').forEach(modal => {
                // Close button
                modal.querySelector('.close-btn').addEventListener('click', function() {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                });
                
                // Click outside
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        modal.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            });
            
            // Form submission handling
            document.querySelectorAll('.modal-form').forEach(form => {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const modal = this.closest('.modal-popup');
                    
                    // Here you would handle form submission
                    console.log('Form submitted:', this);
                    
                    // For demo purposes, just close the modal
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                    
                    // Show success message
                    alert('Form submitted successfully!');
                });
            });
        });