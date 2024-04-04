<?php
require_once "user_management.php";
//include "forgotpw.php";
if (isset($_SESSION["user"])) {
    header("Location: main.php");
}
?>