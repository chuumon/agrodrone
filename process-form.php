<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'grishano.evgn@gmail.com';
    $subject = 'Заявка на зворотній звінок з сайту ДронАгроСкай';
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <h4>Нова заявка на зворотній звінок з сайту ДронАгроСкай</h4>

                    <p>Ім\'я: '.$_POST['name'].'</p>
                    <p>Телефон: '.$_POST['phone'].'</p>                        
                </body>
            </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: agrodrone.web@gmail.com"; //Наименование и почта отправителя
    if(mail($to, $subject, $message, $headers)) {
        echo true;
    } else {
        echo false;
    }
}
?>