<?php 
    $name=$_POST['name'];

    $email=$_POST['country'];

    $subject=$_POST['blog'];

    $message=$_POST['trash-name'];
    
    if (($name!="")||($email!="")||($message!="")) {   

        $from="From: $name<$email>\r\nReturn-path: $email";

        // Change to your email
        mail("yourmail@example.com", $subject, $message, $from);  

        echo "Email sent!"; 
    }    
?> 