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
    
</body>
</html>