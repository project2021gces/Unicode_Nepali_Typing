<?php
 //--Signup Form validation--                  
 $fieldError = "";
 $usernameError = "";
 $emailError = "";
 $passwordError = "";
 $confirmError = "";
 $sucess = "";

 if (isset($_POST["signup"])) {
     $username = $_POST["username"];
     $email = $_POST["email"];
     $password = $_POST["password"];
     $confirmpassword = $_POST["confirmpassword"];
     //$img = $_POST["img"];

     require_once "database_conn.php";

     //email validation 
     $sql = "SELECT * FROM users WHERE email = '$email'";
     $result = mysqli_query($conn, $sql);
     $rowCount = mysqli_num_rows($result);

     if (empty($username) || empty($email) || empty($password) || empty($confirmpassword)) {
         $fieldError = "All field are required.";
     } elseif ($rowCount > 0) {                     //conditon checked for email validation
         $emailError = "Email already exits!";
     } else {
         if (strlen($password) < 8) {
             $passwordError = "Password must be at least 8 characters long.";
         }
         if ($password !== $confirmpassword) {
             $confirmError = "Password does not match.";
         }
         //if (strlen($password) < 8 || $password !== $confirmpassword) {}
          else {
             //insert the data into database if any error is not occured
             $sql = "INSERT INTO users (username, email, password) VALUES (?,?,?)";
             $stmt = mysqli_stmt_init($conn);
             $prepareStmt = mysqli_stmt_prepare($stmt, $sql);

             if ($prepareStmt) {
                 mysqli_stmt_bind_param($stmt, "sss", $username, $email, $password);
                 mysqli_stmt_execute($stmt);
                 $sucess = "You are registered successfully";
                 header("refresh:1,url=login.php");  // redirect to login page after delay of 1s
             } else {
                 die("Something went wrong");
             }
         }
     }
     }

    //--Login Form validation--
    if (isset($_POST["login"])) {
        $email = $_POST["email"];
        $password = $_POST["password"];
        require_once "database_conn.php";
        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = mysqli_query($conn, $sql);
        $user = mysqli_fetch_array($result, MYSQLI_ASSOC);

        if ($user) {
            if ($password == $user["password"]) {
                session_start();
                $_SESSION["user"] = $user;
                //cookie 
                if(isset($_POST['remember_me'])){           // add cookie for remember me
                    setcookie('email_username',$_POST['email'],time()+ (30*24*60*60));
                    setcookie('password',$_POST['password'],time()+ (30*24*60*60));
                }
                else{                   //clear cookie
                    setcookie('email_username','',time() - (30*24*60*60));
                    setcookie('password','',time() - (30*24*60*60));
                }
    
                header("Location: main.php"); //redirect
                die();
            } else {
                $passwordError = "Password does not match.";
            }
        } elseif (empty($email)) {
            $fieldError = "All field are required.";
        } else {
            $emailError = "Email does not match.";
        }
    }
    
    //update data form
    $sucessuser ='';
    $sucesspw ='';
    //To update username only
    if (isset($_POST['update_username'])) {
        $newusername = $_POST['newusername'];
        //to fetch the letest data
        require_once "database_conn.php";
        $id =$_SESSION['user']['id'];
        $select_query = "SELECT * FROM users WHERE id = '$id'";
        $result = mysqli_query($conn, $select_query);
        $row = mysqli_fetch_assoc($result);

        $current_username=$row['username'];

        if(empty($newusername))
        {
          echo "<script>alert('Please fill in field to update.');</script>";
          //$FieldError = "Please fill in field to update.";
        }
        elseif($newusername!==$current_username){
                $updateUsername_query = "UPDATE users SET username = '$newusername' WHERE id = '$id'";
                $updateUsername_result = mysqli_query($conn, $updateUsername_query);
               echo "<script>alert('Username updated successfully!');</script>";
               //$sucessuser = "Username updated sucessfully!";   
            }
            else{
                //$usernameError = "Username updated Fail!(Try differnt username from previous).";
                echo "<script>alert('Username updated Fail!(Try differnt username from previous).');</script>";
            }
    }

    //To update password only
    if (isset($_POST['update_password'])) {

             $currentpassword = $_POST['currentpw'];
             $newpassword = $_POST['newpw'];
             $repeatpassword = $_POST['repeatpw'];
             $id =$_SESSION['user']['id'];
             require_once 'database_conn.php';
        if(empty($currentpassword)|| empty($newpassword) || empty($repeatpassword))
            {  
                echo "<script>alert('All field are required');</script>";
                //$fieldError= "all Field are required";
            }
        elseif (strlen($newpassword) < 8) {
                echo "<script>alert('Password must be at least 8 characters long.');</script>";
               //$passwordError = "Password must be at least 8 characters long.";
            }
        else{
            $select_query = "SELECT * FROM users WHERE id = '$id'";
            $result = mysqli_query($conn, $select_query);
            $row = mysqli_fetch_assoc($result);

            if($newpassword !== $repeatpassword) {
            //$confirmError = "Passwords do not match.";
             echo "<script>alert('Passwords do not match');</script>";
             }
            elseif($currentpassword == $row['password']) {
                $updatepw_query = "UPDATE users SET password = '$newpassword' WHERE id = '$id'";
                $updatepw_result = mysqli_query($conn, $updatepw_query);
                if ($updatepw_result > 0) {
                     //$sucesspw="Password updated successfully!";
                    echo "<script>alert('Password updated successfully!');</script>";
                } 
            }
            else {
                // $passwordError = "Incorrect Current Password.";
                echo "<script>alert('Incorrect current password');</script>";
            }
        }
    }
//delete account
    if (isset($_POST['delete'])) {
        $confirmpassword = $_POST['confirm_password'];
        $email =$_SESSION['user']['email'];
        require_once 'database_conn.php';
   if(empty($confirmpassword))
       {  
           echo "<script>alert('Enter your current password');</script>";
           //$fieldError= "all Field are required";
       }
   else{
       $select_query = "SELECT * FROM users WHERE email = '$email'";
       $result = mysqli_query($conn, $select_query);
       $row = mysqli_fetch_assoc($result);
       if($confirmpassword == $row['password']) {
           $del_query = "DELETE FROM users WHERE email = '$email'";
           $del_result = mysqli_query($conn, $del_query);
           if ($del_result > 0) {
                //$sucesspw="Password updated successfully!";
               echo "<script>alert('Account Deleted successfully!');</script>";
               header("refresh:0.1,url=logout.php");
           } 
       }
       else {
           // $passwordError = "Incorrect Current Password.";
           echo "<script>alert('Incorrect current password');</script>";
       }
   }
}


    //on clicking cancel in acc-set page redirect to main.php 
    if(isset($_POST['cancel'])){
        header('Location: main.php');
    }
?>