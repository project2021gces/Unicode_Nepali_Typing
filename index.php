<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unicode नेपाली Tying</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://kit.fontawesome.com/e6ec068722.js" crossorigin="anonymous"></script>
    
</head>
<body>
    <header>
    <nav class="navbar">
        <!--TITLE-->
        <div class="logo">
            <a href="index.php" class="logotext">
                <h2>Unicode नेपाली <span class="typing"></span></h2>
            </a>
        <!--Js to animate Title Text-->
            <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
                    <script>
                        var typed =new Typed(".typing", {
                        strings:["Typing"],
                        typeSpeed: 120,
                        backSpeed: 100,
                        loop: true 
                         })
            </script>
            
        <?php
        if (isset($_SESSION["user"])) {
            require_once "pages/database_conn.php";
            $id =$_SESSION['user']['id'];
            $select_query = "SELECT * FROM users WHERE id = '$id'";
            $result = mysqli_query($conn, $select_query);
            $row = mysqli_fetch_assoc($result);
            $current_username=$row['username'];
            echo '
           <img src="_images/user.jpg" alt="users-profile" class="profile">
           <div class="sub-menu-wrap" id="subMenu">
            <div class="sub-menu">
                <div class="user-info">
                    <img src="_images/user.jpg" alt="users-profile">
                    <h3><span>' ?>
                    <?php echo $current_username; ?>
                    <?=
                '</span></h3> 
                </div>
                <hr>
                <a href="pages/acc-set.php" class="sub-menu-link">
                <i class="fa-solid fa-gear"></i>
                    <p>Account Setting</p>
                </a>
                <a href="pages/logout.php" class="sub-menu-link">
                <i class="fa-solid fa-right-from-bracket"></i>
                    <p>Log out</p>
                </a>
            </div>
        </div>';
        } else {
            echo '
         <div class="links">
            <a href="pages/login.php"  class="login-btn">Log In</a>
            <a href="pages/signup.php" class="signup-btn">Sign Up</a>
        </div> ';
        }
        ?>
        <!-- js for users-profile-->
        <script>
            let profile = document.querySelector(".profile");
            let subMenu = document.querySelector(".sub-menu-wrap");

            profile.onclick = function(){
                subMenu.classList.toggle("open-menu");
                profile.classList.toggle("open-menu");
            }

            document.onclick = function(e){
                if(!subMenu.contains(e.target) && !profile.contains(e.target)){
                    subMenu.classList.remove("open-menu");
                    profile.classList.remove("open-menu");
                }
            }
        </script>
        </nav>
    </header>

     <!--Display Details-->
     <main>
        <div class="info">
            <div class="define">
              Learn To Type Faster and Easier.<br>
              Unicode Nepali Typing is the Web typing platform.
              
            </div> 

         </div>
          <div class="container">
              <div class="box1">
                  <h4>User Guide</h4>
                  <p>Get information about Unicode Keyboard Layout and Work formation.</p>            
              </div>

              <div class="box2">
                <h4>Start Typing</h4>
                <p>Get start typing here.</p>    
              </div>

              <div class="click-btn">
                <a href="pages/guide.php" class="btn1">Click Here</a>
                <a href="pages/main.php" class="btn2">Start Typing</a>
              </div>
          </div>
    </main>
</body>
</html>
    
</body>
</html>