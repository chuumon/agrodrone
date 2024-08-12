<?php
    $to      = 'grishano.evgn@gmail.com';
    $subject = 'the subject';
    $message = 'hello';
    $headers = 'From: agrodrone.web@gmail.com'       . "\r\n" .
                 'Reply-To: agrodrone.web@gmail.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
?>