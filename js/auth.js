 let footer = document.getElementById("footer").innerHTML = `<p>&copy; 2023 A.A Mujaheed Global Enterprises. All rights reserved.</p><p>Developed by: <a href="https://wa.me/+2347046245050">Mahadi Abubakar Mujahid</a></p>`;
        
 document.getElementById("loginForm").addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Something Went Wrong!',
                    html: '<div class="error-message">Please fill in the Username field.</div>',
                    cancelButtonText: 'Ok',
                    showCancelButton: true,
                    showConfirmButton: false,
                    cancelButtonColor: 'darkred',
                    customClass: {
                        popup: 'my-custom-popup-class',
                        title: 'alert-title',
                        confirmButton: 'confirm-button',
                        cancelButton: 'cancel-button',
                        text: 'alert-text',
                        // Other elements you can target:
                        // container, actions, icon, htmlContainer, etc.
                    }
                });
                return;
            }

            if (password === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Something Went Wrong!',
                    html: '<div class="error-message">Please fill in the Password field.</div>',
                    cancelButtonText: 'Ok',
                    showCancelButton: true,
                    showConfirmButton: false,
                    cancelButtonColor: 'darkred',
                    customClass: {
                        popup: 'my-custom-popup-class',
                        title: 'alert-title',
                        confirmButton: 'confirm-button',
                        cancelButton: 'cancel-button',
                        text: 'alert-text',
                        // Other elements you can target:
                        // container, actions, icon, htmlContainer, etc.
                    }
                });
                return;
            }

            const user = {
                name: 'ADMIN',
                role: 'Proprietor',
                v_username: 'admin',
                v_password: 'admin'
            };

            if (username !== user.v_username || password !== user.v_password) {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed!',
                    html: '<div class="error-message">Invalid Username or Password.</div>',
                    cancelButtonText: 'Ok',
                    showCancelButton: true,
                    showConfirmButton: false,
                    cancelButtonColor: 'darkred',
                });
                return;
            }

            Swal.fire({
                icon: 'question',
                    html: '<div class="question-message">Please fill in the Password field.</div>',
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: 'Login',
                cancelButtonText: 'Cancel',
                confirmButtonColor: '#276dc9',
                cancelButtonColor: 'darkred',
                allowOutsideClick: false,
                preConfirm: () => {
                    return new Promise((resolve) => {
                        Swal.showLoading();
                        setTimeout(() => {
                            resolve();
                        }, 2000);
                    });
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulations',
                        text: 'Welcome back to ADMIN Dashboard',
                        timer: 3000,
                        showConfirmButton: true,
                        confirmButtonColor: '#276dc9',
                    }).then(() => {
                        window.location.href = 'dashboard.html';
                    });
                }
            });
        });