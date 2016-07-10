<?php
    
    session_start();

    $errors=[];
    $subject = 'VectorTech contact us form';
    $email=$_POST['email'];

    if (isset($_POST['name'],$_POST['email'],$_POST['message'])){
        
        $fields=[
            'name' => $_POST['name'],
            'email' => $_POST['email'],
            'message' => $_POST['message'],
        ];

        foreach ($fields as $fields => $data) {
            if(empty($data)){
                $errors[]='The '.$fields.' field is required.';
            }
        }
    }else{
        $errors[]='Something went wrong.'; 
    }

    $_SESSION['errors']= $errors;
    $_SESSION['fields']= $fields;

    if(empty($errors)){
        $message = $_POST['message'];

        $headers = 'From:'. $email . "\r\n"; // Sender's Email

        $headers .= 'Cc:'. $email . "\r\n"; // Carbon copy to Sender

        // Message lines should not exceed 70 characters (PHP rule), so wrap it

        $message = wordwrap($message, 70);

        // Send Mail By PHP Mail Function

       if(mail("inspiria12@gmail.com", $subject, $message, $headers)){
            header('Location:../contact.php?status=1');
       }else{
            header('Location:../contact.php?status=0');
       } ;

    }else{
        header('Location:../contact.php?status=0');
    }
?>