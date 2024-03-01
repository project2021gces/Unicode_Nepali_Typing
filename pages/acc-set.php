<?php
  session_start();
    include "user_management.php";

    $id =$_SESSION['user']['id'];
    require_once "database_conn.php";
    $select_query = "SELECT * FROM users WHERE id = '$id'";
    $result = mysqli_query($conn, $select_query);
    $row = mysqli_fetch_assoc($result);
    
    if (!isset($_SESSION["user"])) {
    header("Location: login.php");
} 
    $referringPage = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'main.php'; 
//When a user clicks a link to visit current page, the browser sets the HTTP_REFERER to the URL of the previous page.
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Expires" content="Tue, 01 Jan 1995 12:12:12 GMT">
<meta http-equiv="Pragma" content="no-cache">
    <title>Account Settings</title>
    <link rel="stylesheet" href="../css/acc-set.css">
</head>
<body>
    <div class="contianer">
        <h4>Account Settings</h4>
        <div class="box overflow-hidden">
            <!--Option Lists-->
         <form action="" id="form" method="POST">
            <div class="menu-options">
                <div class="column1">
                    <div class="list-group" id="list-group">
                        <a onclick="tabs(0)" data-active="general" class="list-group-item active" data-toggle="list"
                                href="#account-general">General</a>
                        <a onclick="tabs(1)" data-active="change-password" class="list-group-item " data-toggle="list"
                                href="#account-change-password">Change password</a>
                        <a onclick="tabs(2)" data-active="delete" class="list-group-item " data-toggle="list"
                                href="#account-delete">Delete Account</a>
                <!--    <a onclick="tabs(3)" data-active="help" class="list-group-item " data-toggle="list"
                                href="#account-help&support">Help & Support</a>
                        -->     
                    </div>
                </div>
                <script>    //active button hover
                    var btnContainer = document.getElementById("list-group");
                    var btns = btnContainer.getElementsByClassName("list-group-item");
            
                    for(var i=0; i < btns.length; i++)
                    {
                        btns[i].addEventListener('click', function(){
                            var current = document.getElementsByClassName("active");
                            current[0].className = current[0].className.replace(" active");
                            this.className += " active";
                        })
                    }
                </script>
                <!--Details Display-->
                <div class="column2">
                    <div class="contents" id="contents">
                        <!--General Desk-->
                        <div class="general tabshow" id="account-general">
                        <form action="acc-set.php" method="POST" >
                            <div class="profile-pic">
                                <img src="../_images/user.jpg" value="$_SESSION['user']['img']" alt="Profile Picture">
                                <div class="up-btn">
                                    <label for="profile" class="upload-btn" name="upload" accept=".jpg, .jpeg, .png, .svg" id="upload">
                                        Upload new photo
                                        <input type="file" id="image" name="image" accept=".jpg, .jpeg, .png, .svg" value="upload" style="display:none">&nbsp;
                                    </label>
                                </div>
                            </div>
                            <hr>
                            <script>    //trigger a choose file fn on clicking label
                                let upload =document.querySelector(".upload-btn");
                                upload.onclick=function handleLabelClick(){
                                    document.getElementById("image").click();
                                }
                            </script>
                            <script type="text/javascript">
                            document.getElementById("image").onchange = function(){
                                document.getElementById("form").submit();
                            };
                            </script>
                            <div class="from-box">
                                <div class="form-group">
                                    <label for="newusername" class="form-label">Username:
                                    </label>
                                    <input type="text" name="newusername" id="newusername" class="form-control" placeholder="<?php echo $row['username'];?>">

                                    <span class="validation-message"></span>   
                                    <div id="user-availability-status"></div> 

                                    <span class="error-txt"><?php echo $usernameError; ?></span>
                                    <span class="success-txt"><?php echo $sucessuser; ?></span>
                                </div>
                                <div class="form-group">
                                    <label for="" class="form-label">E-mail: <?php echo ($_SESSION['user']['email'])?> </label>
                                    <div class="comment">
                                    “To change your username, enter the new username and click ‘Save Changes’.”
                                    </div>

                                   <!-- <input type="text" name="newemail" class="form-control" value="<?php //echo ($_SESSION['user']['email'])?>" readonly style="border:none"></label> 
                                    <div class="warning">
                                        Your email is not confirmed. Please check your inbox.<br>
                                        <a href="javascript:void(0)">Resend Confirmation</a>
                                    </div>
                                    -->
                                </div> 
                            </div>
                            <div class="btns">
                                <button type="submit" id="update_username" name="update_username" class="save-btn">Save Changes</button>&nbsp;
                                <a href="" 
                                    <?php //$referring_page 
                                         //onclick= "history.back(main.php)" 
                                        ?> >
                                <button type="submit" name="cancel" class="cancle-btn">Cancel</button>
                                </a>
                            </div>
                            </form>
                        </div>
                        <!--Privacy desk Desk-->
                        <div class="privacyset tabshow" id="account-change-password">
                            <form action="acc-set.php" method="POST">
                            <div class="form-box">
                                <span class="success-txt"><?php echo $sucesspw; ?></span>
                                    <div class="form-group">
                                        <label for="" class="form-label">Current Password</label>
                                        <input type="password" name="currentpw" id="currentpw" class="form-control">
                                        <span class="error-txt"><?php echo $passwordError; ?></span>
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">New Password</label>
                                        <input type="password" name="newpw" id="newpw" class="form-control">
                                        <span class="success-txt"><?php echo $confirmError; ?></span>
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Repeat new Password</label>
                                        <input type="password" name="repeatpw" id="repeatpw" class="form-control">
                                    </div> 
                                </div>
                                <div class="btns">
                                    <button type="submit" name="update_password" class="save-btn">Save Changes</button>&nbsp;
                                    <a href="">
                                    <button type="submit" name="cancel" class="cancle-btn">Cancel</button>
                                    </a>
                                </div>
                            </form>
                            </div>
                            <!--Delete Account Desk-->
                            <div class="deleteacc tabshow" id="account-delete">
                                <form action="acc-set.php" method="POST">
                                <div class="form-box">
                                    <div class="form-group">
                                        <h5>Delete My Profile</h5>
                                        <hr>
                                        <p>Once you do, all data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.</p>
                                        <label for="" class="form-label">Confirm Passowrd</label>
                                        <input type="password" name="confirm_password" id="confirm_password" class="form-control">
                                    </div>
                                </div>
                                <div class="btns">
                                    <button type="submit" name="delete" class="save-btn">Delete</button>&nbsp;
                                    <a href="">
                                    <button type="submit" name="cancel" class="cancle-btn">Cancel</button>
                                    </a>
                                </div>
                                </form>
                            </div>
                          
                            <!-- Help and Support Desk--
                            <div class="helpdesk tabshow" id="account-help&support">
                                <form action="acc-set.php" method="POST">
                                <div class="form-box">
                                    <div class="form-group">
                                        <label for="" class="form-label">Report</label>
                                        <input type="text" name="report" id="report" class="form-control">
                                    </div>
                                </div>
                                <div class="btns">
                                    <button type="submit" name="send" class="save-btn">Send</button>&nbsp;
                                    <a href="">
                                    <button type="submit" name="cancel" class="cancle-btn">Cancel</button>
                                    </a>
                                </div>
                                </form>
                            </div>
                        -->
                    </div>
                </div>
            </div>
            <!--                                
            <div class="btns">
                <button type="submit" name="save" class="save-btn">Save Changes</button>&nbsp;
                <a href="<?= $previous_page 
                            //link to return previous page
                         ?>">
                <button onclick= "history.back(main.php)" name="cancle" type="button" class="cancle-btn">Cancel</button>
                </a>
            </div>
             -->
        </form>              
    </div>
    </div>
    <!--js to show the contents of active links-->
    <script>
        const tabBtn = document.querySelectorAll(".list-group-item");
        const tab = document.querySelectorAll(".tabshow");

        function tabs(panelIndex){
            tab.forEach(function(node){
                node.style.display = "none";
            })
            tab[panelIndex].style.display = "block";
        }
        tabs(0);
    </script>

</body>
</html>
