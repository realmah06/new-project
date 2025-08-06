   document.getElementById("loginForm").addEventListener('submit', function(event){
    event.preventDefault();
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
            })
        }
       
   })