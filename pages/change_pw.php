<?php
require_once "user_management.php";
//include "forgotpw.php";
if (isset($_SESSION["user"])) {
    header("Location: main.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
<!--Change Password Section-->
<div class="container">
            <div class="title-section">
                <h2 class="title">Change Password</h2>
                <p class="para"> Please create your new password.</p>
                <hr>
            </div>
        <span class="success-txt"><?php echo $success; ?></span>
        <form action="" method="POST" class="form">
            <div class="input-field">
               <i class="fa-solid fa-lock"></i>
               <input type="password" name="newpassword" id="newpassword" placeholder="New Password"> 
            </div>
            <div class="input-field">
               <i class="fa-solid fa-lock"></i>
               <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password">
            </div>
</body>
</html>