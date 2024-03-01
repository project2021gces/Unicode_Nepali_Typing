<?php
session_start();
include "user_management.php";
//cookie auto write
if(isset($_COOKIE['email_username'])&& isset( $_COOKIE['password'])){
    $id = $_COOKIE['email_username'];
    $pw = $_COOKIE['password'];
}
else{
    $id = '';
    $pw = '';
}
//session
if (isset($_SESSION["user"])) {
    header("Location: main.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unicode नेपाली Tying</title>
    <link rel="stylesheet" href="../css/login.css">
    <script src="https://kit.fontawesome.com/e6ec068722.js" crossorigin="anonymous"></script>

</head>
<body>
    <header>
        <nav class="navbar">
        <div class="logo">
            <a href="../index.php" class="logotext">
                <h2>Unicode नेपाली Typing</h2>
            </a>
        </nav>
    </header>
    <!-- Log in form -->
        <div class="form-box" id="blur">
           <h1 class="login">Log In</h1>
           <form action="login.php" method="post">
              <div class="input-group">
              <!--Error and Success msz display-->
              <span class="error-txt"><?php echo $fieldError; ?></span>
                 <div class="input-field">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" name="email" id="email" placeholder="Email" value="<?php echo $id ?>">
                 </div>
                 <!--Error and Success msz display-->
                 <span class="error-txt"><?php echo $emailError; ?></span>
                 <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" name="password" id="password" placeholder="Password" value="<?php echo $pw ?>">
                 </div>
                 <!--Error and Success msz display-->
                 <span class="error-txt"><?php echo $passwordError; ?></span>
              </div>
              <div class="remember-forgot">
                <input type="checkbox" id="check" name="remember_me">
                 <label for="check" name="remember_me">Remember me</label>
                 <p class="forgot">Forgot password?</p>
              </div>
              <div class="btn-field">
                 <button type="submit" name="login" value="login">Log In</button>
              </div>
              <div class="signup-link">
                 <p> Don't have an account? <a href="signup.php">Sign Up</a></p>
              </div>
           </form>
        </div>
<!--Reset Password Section-->
    <div class="section" id="subMenu">
        <div class="container">
            <div class="title-section">
                <h2 class="title">Forgot Your Login Password?</h2>
                <p class="para"> Please enter your email below to get the reset email. </p>
            </div>

            <form action="#" class="form">
                <div class="inputfield">
                    <label for="" class="label-title"> Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email address">
                    <span class="icon">&#9993;</span>
                </div>
                <div class="btn">
                    <button class="cancel-btn" id="cancel-btn">Cancel</button>
                    <button class="submit-btn" name="sendotp" type="submit">Send Password Reset Email</button>
                </div>
            </form>
        </div>
    </div>
        <script>        //popup and hide js
            let forgot = document.querySelector(".forgot");
            let subMenu = document.querySelector(".section");
            let cancelButton = document.querySelector('.cancel-btn');
            let blur=document.getElementById('blur');

            forgot.onclick = function(){
                subMenu.classList.toggle("open-menu");
                forgot.classList.toggle("open-menu");
                blur.classList.toggle('active');
            }
           document.onclick = function(e){
                if(cancelButton.contains(e.target)){            //if target is on area of cancleButton
                    subMenu.classList.remove("open-menu");      //remove popup or open-menu
                    forgot.classList.remove("open-menu");       
                    blur.classList.remove('active');            //remove blur background
                }
            }
        </script>

</body>
</html>