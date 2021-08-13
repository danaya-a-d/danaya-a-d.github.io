<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);

// От кого письмо
$mail->setFrom('danaya.a.d@yandex.ru', 'Danaya');
// Кому письмо
$mail->addAddress('danaya.a.d@yandex.ua');

// Тема письма
$mail->Subject = 'Тема письма';

// Тело письма
$body = '<h1>Новая заявка на звонок:</h1>';

if(trim(!empty($_POST['name']))) {
	$body .= '<p><strong>Имя:</strong>' . $_POST['name'] . '</p>';
}

if(trim(!empty($_POST['tel']))) {
	$body .= '<p><strong>Телефон:</strong>' . $_POST['tel'] . '</p>';
}

$mail->Body = $body;

// Отправлям
if (!$mail->send()) {
	$message = 'Ошибка!';
} else {
	$message = 'Данные отправленны!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>