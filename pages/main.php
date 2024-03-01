<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unicode नेपाली Tying</title>
    <link rel="stylesheet" href="../css/main.css">
    <script src="https://kit.fontawesome.com/e6ec068722.js" crossorigin="anonymous"></script>
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
                <a href="acc-set.php" class="sub-menu-link">
                <i class="fa-solid fa-gear"></i>
                    <p>Account Setting</p>
                </a>
                <a href="logout.php" class="sub-menu-link">
                <i class="fa-solid fa-right-from-bracket"></i>
                    <p>Log out</p>
                </a>
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

    <!--APP-->
    <div class="app">
        <div class="wrapper">
            <!-- Difficulty -->
    <select multiple class="selectoption" id="difficulty">
        <option class="optionlist" value="Introduction" data-value="Introduction">Introduction</option>
        <option class="optionlist" value="Beginner" data-value="Beginner">Beginner</option>
        <option class="optionlist" value="Advanced" data-value="Advanced">Advanced</option>
        <option class="optionlist" value="Expert" data-value="Expert">Expert</option>
    </select>

    <!-- Key Row -->
    <select multiple class="selectoption" id="keyRow">
        <option class="optionlist" value="homekey" data-value="homekey">Home Key</option>
        <option class="optionlist" value="topkey" data-value="topkey">Top Key</option>
        <option class="optionlist" value="bottomkey" data-value="buttomkey">Bottom Key</option>
        <option class="optionlist" value="allkey" data-value="allkey">All Key</option>  
    </select>

    <!-- Lessons -->
    <select multiple class="selectoption" id="lessons">
        <option class="optionlist" value="lesson1" data-value="lesson1">Lesson 1</option>
        <option class="optionlist" value="lesson2" data-value="lesson2">Lesson 2</option>
        <option class="optionlist" value="lesson3" data-value="lesson3">Lesson 3</option>
        <option class="optionlist" value="lesson4" data-value="lesson4">Lesson 4</option>
        <option class="optionlist" value="lesson5" data-value="lesson5">Lesson 5</option>
        <option class="optionlist" value="lesson6" data-value="lesson6">Lesson 6</option>
        <option class="optionlist" value="lesson7" data-value="lesson7">Lesson 7</option>
        <option class="optionlist" value="lesson8" data-value="lesson8">Lesson 8</option>
        <option class="optionlist" value="lesson9" data-value="lesson9">Lesson 9</option>
        <option class="optionlist" value="lesson10" data-value="lesson10">Lesson 10</option>
    </select>
            <script src="../script/main.js">   
            </script>
            <div class="lvlprogress">
                    <h4>Progress Bar</h4>
                    <div class="levelbar">
                        <div class="bar">60%</div>
                    </div>
                    <div class="username">
                    <label for="">User:</label> 
                    <input type="text" value="<?php if (
                        isset($_SESSION["user"])
                    ) {
                       echo $current_username; 
                    } else {
                        echo "unknown user";
                    } ?>" readonly    >
                    <span></span>
                </div>
            </div>

            <div class="typingdetils">
                <label for="">Total Letters : 0</label>
                <label for="">Mistake Letters : 0</label>
                <label for="">Speed (WPM) : 0</label>
                <label for="">Accuracy(%) : 0</label>
                <label for="">Time Taken (s) : 0</label>
            </div>
        </div>
    </div>

    <div class="container">

        <div class="content">
            <div class="wordDisplay" id="wordDisplay"></div>
            <div class="typedWord" id="typedWord"></div>
        </div>

<!--KEYBOARD DESIGN-->
    <div class="housing">
        <div class="layout">

             <!-- Number Keys -->
            <div class="numkey">
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
                            <div>`</div>
                        </div>
    
                        <div class="nep_font">
                            <div>॥</div>
                            <div>ञ</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>1</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ज्ञ</div>
                            <div>१</div> 
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>2</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ई</div>
                            <div>२</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>3</div>
                        </div>
    
                        <div class="nep_font">
                            <div>घ</div>
                            <div>३</div>
                        </div>
                    </div>
    
                </div><div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>4</div>
                        </div>
    
                        <div class="nep_font">
                            <div>द्ध</div>
                            <div>४</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>5</div>
                        </div>
    
                        <div class="nep_font">
                            <div>छ</div>
                            <div>५</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>6</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ट</div>
                            <div>६</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>7</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ठ</div>
                            <div>७</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>8</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ड</div>
                            <div>८</div>
                        </div>
                    </div>
                    
                </div>
                
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>9</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ढ</div>
                            <div>९</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>0</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ण</div>
                            <div>०</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
                            <div>_</div>
                            <div>-</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ओ</div>
                            <div>औ</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
                            <div>+</div>
                            <div>=</div>
                        </div>
    
                        <div class="nep_font">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
    
                <div class="backspacekey">
                        <div class="rkey-text">
                              <div>Backspace</div>
                        </div>
                </div>

            </div>


             <!-- Top Keys -->
            <div class="topkey">

                <div class="tabkey">
                        <div class="lkey-text">
                            Tabs
                        </div>
                </div>
                 
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>   Q</div>
                        </div>
    
                        <div class="nep_font">
                            <div>त्त</div>
                            <div>त्र</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>W</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ड्ढ</div>
                            <div>ध</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>E</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ऐ</div>
                            <div>भ</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>R</div>
                        </div>
    
                        <div class="nep_font">
                            <div>द्ब</div>
                            <div>च</div>
                        </div>
                    </div>
    
                </div><div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>T</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ट्ट</div>
                            <div>त</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>Y</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ठ्ठ</div>
                            <div>थ</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>U</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ऊ</div>
                            <div>ग</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>I</div>
                        </div>
    
                        <div class="nep_font">
                            <div>क्ष</div>
                            <div>ष</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>O</div>
                        </div>
    
                        <div class="nep_font">
                            <div>इ</div>
                            <div>य</div>
                        </div>
                    </div>
                    
                </div>
                
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>P</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ए</div>
                            <div>उ</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>[{</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ृ</div>
                            <div>र्</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
                            <div>}]</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ै</div>
                            <div>े</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
                            <div>\</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ं</div>
                            <div>्</div>
                        </div>
                    </div>
                </div>

            </div>


                <!-- Home keys -->
            <div class="homekey">

                <div class="capslock">
                    <div class="lkey-text">
                          <div>Caps lock</div>
                    </div>
                </div>

                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>A</div>
                        </div>
    
                        <div class="nep_font">
                            <div>आ</div>
                            <div>ब</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>S</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ङ्क</div>
                            <div>क</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>D</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ङ्ग</div>
                            <div>म</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>F</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ँ</div>
                            <div>ा</div>
                        </div>
                    </div>
    
                </div><div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>G</div>
                        </div>
    
                        <div class="nep_font">
                            <div>द्द</div>
                            <div>न</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>H</div>
                        </div>
    
                        <div class="nep_font">
                            <div>झ</div>
                            <div>ज</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>J</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ो</div>
                            <div>व</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>K</div>
                        </div>
    
                        <div class="nep_font">
                            <div>फ</div>
                            <div>प</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>L</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ी</div>
                            <div>ि</div>
                        </div>
                    </div>
                    
                </div>
                
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>;</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ट्ठ</div>
                            <div>स</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>' "</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ू</div>
                            <div>ु</div>
                        </div>
                    </div>
                </div>

                <div class="enterkey">
                    <div class="rkey-text">
                          <div>Enter</div>
                    </div>
                </div>
    
            </div>

             <!-- Buttom keys -->
            <div class="buttomkey">

                <div class="shiftkey">
                    <div class="lkey-text">
                          Shift
                    </div>
                </div>
                    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>Z</div>
                        </div>
    
                        <div class="nep_font">
                            <div>क्क</div>
                            <div>श</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>X</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ह्य</div>
                            <div>ह</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>C</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ऋ</div>
                            <div>अ</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>V</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ॐ</div>
                            <div>ख</div>
                        </div>
                    </div>
    
                </div><div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>B</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ौ</div>
                            <div>द</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>N</div>
                        </div>
    
                        <div class="nep_font">
                            <div>द्य</div>
                            <div>ल</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>M</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ड्ड</div>
                            <div>ः</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>,</div>
                        </div>
    
                        <div class="nep_font">
                            <div>ङ</div>
                            <div>ऽ</div>
                        </div>
                    </div>
                </div>
    
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>.</div>
                        </div>
    
                        <div class="nep_font">
                            <div>श्र</div>
                            <div>।</div>
                        </div>
                    </div>
                    
                </div>
                
                <div class="key">
                    <div class="key_show">
                        <div class="eng_font">
            
                            <div>/</div>
                        </div>
    
                        <div class="nep_font">
                            <div>रु</div>
                            <div>र</div>
                        </div>
                    </div>
                </div>

                <div class="shiftkey">
                    <div class="rkey-text">
                          Shift
                    </div>
                </div>
    
            </div>

             <!-- Control keys -->
            <div class="controlkey">

                <div class="ctrlkey">
                    <div class="lkey-text">
                        Ctrl
                    </div>
                </div>

                <div class="fnkey">
                    <div class="lkey-text">
                        fn
                    </div>
                </div>

                <div class="winkey">
                    <div class="lkey-text">
                        Win
                    </div>
                </div>

                <div class="altkey">
                    <div class="lkey-text">
                        Alt
                    </div>
                </div>

                <div class="spacebar">
                       Spacebar
                </div>

                <div class="altkey">
                    <div class="rkey-text">
                        Alt
                    </div>
                </div>

                <div class="ctrlkey">
                    <div class="rkey-text">
                        Ctrl
                    </div>
                </div>
    
            </div>

            <!--layout n housing end-->
        </div>
    </div>   

    </div>

<script src="../script/typing.js"></script>
</body>
</html>
    