<?php
$toEmail = "dentalmagic2021@gmail.com";
$mailHeaders  = "Content-type: text/html; charset=utf-8 \r\n";  
$mailHeaders .= "From: Запись с сайта <no-reply@drkravchenko.com.ua> \r\n";
if($_POST["subject"]) {
    $cat = $_POST["subject"];
} else {
    $cat = "Запись на прием";
}
$message = 'Имя: ' . $_POST["userName"] . '<br>' . 'Телефон: ' . $_POST["userTel"];
if(mail($toEmail, $cat, $message, $mailHeaders)) {
print "<p class='success'>Ваши данные отправлены.</p>";
} else {
print "<p class='Error'>Попробуйте еще раз.</p>";
}
?>