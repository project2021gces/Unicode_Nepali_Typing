<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unicode नेपाली Typing</title>
    <link rel="stylesheet" href="../css/guide.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <!--TITLE-->
            <div class="logo">
                <a href="../index.php" class="logotext">
                    <h2>Unicode नेपाली Typing</h2>
                </a>
            <?php
            if (isset($_SESSION["user"])) {
                require_once "database_conn.php";
                $id =$_SESSION['user']['id'];
                $select_query = "SELECT * FROM users WHERE id = '$id'";
                $result = mysqli_query($conn, $select_query);
                $row = mysqli_fetch_assoc($result);
                $current_username=$row['username'];
                echo '
               <img src="../_images/user.jpg" alt="users-profile" class="profile">
               <div class="sub-menu-wrap" id="subMenu">
                <div class="sub-menu">
                    <div class="user-info">
                        <img src="../_images/user.jpg" alt="users-profile">
                        <h3><span>'?>
                        <?php echo $current_username; ?>
                        <?=
                    '</span></h3> 
                    </div>
                    <hr>
                </div>
            </div>';
            } else {
                echo '
             <div class="links">
                <a href="login.php"  class="login-btn">Log In</a>
                <a href="signup.php" class="signup-btn">Sign Up</a>
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
        <!--Content-->
        <div class="container">
            <h2>Guide and User Manual</h2>
            <hr>
            
            <h4 class="heading">Step 1: Fix your keyboard so it stands up.</h4>
           
            <p> Fold-out the keyboard stand from the back top corners of the keyboard. Doing so improves typing and decreases chances that you'll injure your hands after lots of use of typing at the keyboard.
            </p>
            <img src="../_images/1.jpg" alt="Fix Keyboard Stand">

            <h4 class="heading">Step 2: Think about the curvature of your hands as you place them on the keyboard.</h4>
   
            <p>At first, you won't need to place any fingers down, but learn just how they are to be held. First of all, your fingers should form the shape of the letter U as you place them down on the keys.
            </p>
            <img src="../_images/2.jpg" alt="Curvature of hands as placing on keyboard">

            <h4 class="heading">Step 3: To type on a laptop keyboard.</h4>
           
            <p>Raise your wrists a tiny bit above the desk(if you are forced to type on a laptop keyboard).Doing so like this makes up for the space-degrees that a regular computer would have been raised up to. Bring your wrists up about a half inch above the edge of the bottom portion of your keyboard.
            </p>
            <img src="../_images/3.jpg" alt="Laptop keyboard fingers positioning">

            <h4 class="heading">Step 4: Learn to position both hands</h4>
      
            <p> Learn that both hands will need to sit on the keyboard at first.
            </p>
            <img src="../_images/4.jpg" alt="Keyboard Finger Positioning">

            <h4 class="heading">Step 5: Place your hands down on the keyboard </h4>
         
            <li>It won't be natural at first, but after a few weeks of extended proper use of a keyboard, it will be so natural, you wouldn't even have thought you didn't know about this topic before, and you might even end up modifying your wrists and hands to improper positions.
           
            <img src="../_images/5.jpg" alt="Keyboard Finger Positioning">

            <h4 class="heading">Step 6: Learn a little about the names to the rows on a keyboard. </h4>
       
            <p>Although where you place your hands when typing is called the Home row, the row directly above that is called the top row and the row below the Home row is called the bottom row. You want your hands to be resting on the home row until you are ready to press down a key.Those with experience will know how to strike the remainder of the keys of a keyboard, such as the shift key, Caps lock key, number keys/symbol keys and all the other keys on the keyboard.
            </p>
            <img src="../_images/6.jpg" alt="Keyboard Finger Positioning">

            <h4 class="heading">Step 7: Place your left hand on the keyboard.  </h4>
            
            <p>Place your pinkie on the A key, place your ring finger on the S key, place your middle finger on the D key and place your pointer finger on the F key. This is the makeup of everything but your thumbs as to pertain to the left hand.Make sure that the keyboard doesn't click when you place your hands down; otherwise the key will activate and, if you are in a typing box, the letter or keystroke will appear.
            </p>
            <img src="../_images/7.jpg" alt="Keyboard Finger Positioning">

            <h4 class="heading">Step 8: Place your right hand on the keyboard.   </h4>
           
            <p>Place your pinkie down on the semicolon and colon key, place your ring finger down on the L key, place your middle finger down on the K key, place your pointer finger on the J key. This is the makeup of everything but your thumbs as to pertain to the right hand.
            </p>
            <img src="../_images/8.jpg" alt="Keyboard Finger Positioning">

            <h4 class="heading">Step 9: Learn where your thumbs go. </h4>
          
            <p>As you probably learned in keyboarding classes in school, your thumbs rest on the spacebar. Your left thumb should rest on near the left half of the spacebar and the right thumb should rest on the right hand portion of the spacebar.
            </p>
            <img src="../_images/9.jpg" alt="Keyboard Finger Positioning">

            <h4 class="heading">Step 10: Learn just how much pressure it takes to depress each key. </h4>
            
            <p>This may take several taps to make it successful. Only depress each key until you hear the key click and release each finger until your fingers return to their proper positions on the keyboard. On some laptop keyboards, it's become commonplace for the sounds of the taps to not be as loud as they used to be, so these clicks aren't as loud but are still notifying.
            </p>
            <img src="../_images/10.jpg" alt="Keyboard Finger Positioning">
           
            <h2>Keyboard layout(Nepali Unicode Traditional)</h2>
            <hr>
            <img src="../_images/layout.jpg" alt="keyboard layout">
       
            <h2>Keyboard layout(Nepali Unicode Traditional)</h2>
            <hr>
            <img src="../_images/keyboardlayout Traditional.jpg" alt="keyboardlayout Traditional">

            <h2>Typing Non-exsisting Charaters in Keyboard</h2>
            <hr>
            <li>क्ष = क + ् + ष</li>
            <li>त्र = त + ् + र</li>
            <li>ज्ञ = ज + ् + ञ</li>   
            <li> त्त = त + ् + त</li>
            <li>द्ध = द + ् + ध</li> 
            <li>श्र = श + ् + र</li> 
            <li>द्य = द + ् + य</li>  
        </div>
        <br>
        <div class="file">
            <p>Download Nepali Unicode Traditional Keyboard and Keylayout</p>
        <button><a href="../files/Traditional_Nepali_Unicdoe.zip" download="Traditional_Unicode.zip">Click here</a> </button>
        </div>
        <footer>
                <p>Unicode नेपाली Typing</p>
        </footer>
    
</body>
</html>