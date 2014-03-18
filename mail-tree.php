<?php
error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);

$name3 = @trim($_POST['name3']);
$adress3 = @trim($_POST['adress3']);
$mess = @trim($_POST['mess']);

header('Content-Type: application/json; charset=utf-8');

$name3 = mb_convert_encoding($name3, "cp1251", "utf8");
$adress3 = mb_convert_encoding($adress3, "cp1251", "utf8");
$mess = mb_convert_encoding($mess, "cp1251", "utf8");

$to = "goshazvir@gmail.com";
$headers ="From: <$to>\n";
$headers.="X-Mailer: PHP/".phpversion()."\n";
$headers.="Content-Type: text/html; charset=cp1251";
$subject = "Заявка на: ";
$message = "
<table>
<tr>
    <td><strong>Услуга:</strong></td>
    <td> Заполнение формы: </td>
</tr>
<tr>
    <td><strong>Имя:</strong></td>
    <td> $name3 </td>
</tr>
<tr>
    <td><strong>Почта:</strong></td>
    <td> $adress3 </td>
</tr>
<tr>
    <td><strong>Сообщение:</strong></td>
    <td> $mess </td>
</tr>
</table>";
$send = mail($to, $subject, $message, $headers);
if ($send == 'true')
{
    echo json_encode(array('success'    => true));
    exit;
} else {
    echo json_encode(array('success'    => false));
    exit;
}
?>