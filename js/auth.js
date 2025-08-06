document.getElementById("login-space").innerHTML = `<div class="login-form">
        <center><img src="images/logo.jpg" alt="logo">
        <h1>A A Mujaheed Global Enterprises</h1>
        <!--<small><em>Specialized on Sales & Supply of: Maize, Fertilizer, Soya Beans, Agro-Chemicals, etc.</em></small>-->
        <hr style="border: 1px solid darkgreen;">
        </center>
        <br>
        <form id="loginForm">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password">
            </div>
            <input type="checkbox"> <span>Keep me logged in</span> <a class="forgot" href="#">Reset my Password?</a>
            <br>
            <div class="form-group">
                <center>
                    <button type="submit">Sign In</button>
                </center>
            </div>
            <br><br><br>
        </form>
   </div>`