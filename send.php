<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['text'];
    $to = 'info@geojetexploration.com';
    $subject = 'Обратная связь с сайта';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Сайт GeoJet <from@example.com>\r\n";

    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$name.'</p>
                        <p>Почта: '.$email.'</p>                        
                        <p>Сообщение: '.$text.'</p>                        
                    </body>
                </html>
                ';

    mail($to, $subject, $message, $headers);
?>