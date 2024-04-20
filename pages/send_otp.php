<?php
require_once "user_management.php";
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
    <link rel="stylesheet" href="../css/send_otp.css">
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
    <!--Reset Password Section-->
    <div class="container">
        <div class="title-section">
            <h2 class="title">Forgot Your Login Password?</h2>
            <p class="para"> Please enter your email below to get the reset email. </p>
        </div>
    
</body>
</html>