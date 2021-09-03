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
$mail->setFrom('fitnessopt46@gmail.com', 'fitnessopt46');
// Кому письмо
$mail->addAddress('fitnessopt46@gmail.com');

// Тема письма
$mail->Subject = 'Fitness Opt - Новая заявка';

// Тело письма
$body = '<h1>Новая заявка:</h1>';

if(trim(!empty($_POST['name']))) {
	$body .= '<p><strong>Имя:</strong>' . $_POST['name'] . '</p>';
}

if(trim(!empty($_POST['tel']))) {
	$body .= '<p><strong>Телефон:</strong>' . $_POST['tel'] . '</p>';
}

if(trim(!empty($_POST['email']))) {
	$body .= '<p><strong>Телефон:</strong>' . $_POST['email'] . '</p>';
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