   document.getElementById("loginForm").addEventListener('submit', function(event){
    event.preventDefault();

    const adminUser = {
        username: 'realmah06',
        password: '4787@',
        role: 'ADMINISTRATOR',
        fullname: 'MAHADI ABUBAKAR MUJAHID'
    };


        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value.trim();

        if(username === ''){
            Swal.fire({
                icon: 'warning',
                html: `<p class="title-alert">Missing Field!</p>`,
                html: `<p class="alert-message">Sorry!, Fill in the Username Field</p>`,
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger',
                    denyButton: 'btn btn-secondary'
                }
            });
            return;
        } else if (password === ''){
             Swal.fire({
                icon: 'warning',
                html: `<p class="title-alert">Missing Field!</p>`,
                html: `<p class="alert-message">Sorry!, Fill in the Password Field</p>`,
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger',
                    denyButton: 'btn btn-secondary'
                }
            }).then(() => {
                document.getElementById('password').focus();
            })
            return;
        }

        //  let admin = {
        //     FullName: 'Abdullahi Abubakar Mujahid',
        //     Role: 'Admin',
        //     username: 'Amujahid',
        //     password: 'admin',
        //  }

        // let subAdmin = [
        //     FullName = 'Mahadi Abubakar Mujahid',
        //     Role = 'Sub-Admin',
        //     username = 'Mahadi',
        //     password = 'subadmin',
        // ]
        //  if(username === "mahadi" && password === "admin"){
        //     Swal.fire({
        //         icon: 'warning',
        //         html: `<p class="title-alert">Login to Site?</p>`,
        //         showConfirmationButton: true,
        //         showCancelButton: true,
        //         cancelButtonText: 'Discard',
        //         customClass: {
        //             confirmButton: 'btn btn-success',
        //             cancelButton: 'btn btn-danger',
        //             denyButton: 'btn btn-secondary'
        //         }
        //     }).then(() => {
                
        //     })
        //  }

        // Check if credentials are correct
  if (username === adminUser.username && password === adminUser.password) {
    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(adminUser));

    // Show confirmation alert before login
    Swal.fire({
      icon: 'warning',
      html: `<p class="title-alert">Login to Site?</p>`,
      showCancelButton: true,
      cancelButtonText: 'Discard',
      confirmButtonText: 'Login',
      allowOutsideClick: false,
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
        denyButton: 'btn btn-secondary'
    },
      preConfirm: () => {
        return new Promise((resolve) => {
          Swal.showLoading(); // Show loading spinner
          setTimeout(() => {
            resolve();
          }, 3000); // Simulate delay
        });
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          html: `<p class="title-alert">Congratulations</p>`,
          text: 'Welcome back to ADMIN Dashboard',
        //   timer: 3000,
          showConfirmButton: true,
          customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger',
                    denyButton: 'btn btn-secondary'
                },
        }).then(() => {
          window.location.href = 'dashboard.html';
        });
      }
    });
  } else {
    Swal.fire({
      icon: 'error',
      html: `<p class="title-alert">Login Failed</p>`,
      text: 'Invalid Username or Password.',
      customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger',
                    denyButton: 'btn btn-secondary'
                }
    });
  }
       
   });