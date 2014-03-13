<?php
error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);


$name2 = @trim($_POST['name2']);
$adress2 = @trim($_POST['adress2']);
$site2 = @trim($_POST['site2']);
$service2 = @trim($_POST['service2']);

header('Content-Type: application/json; charset=utf-8');

$name2 = mb_convert_encoding($name2, "cp1251", "utf8");
$adress2 = mb_convert_encoding($adress2, "cp1251", "utf8");
$site2 = mb_convert_encoding($site2, "cp1251", "utf8");
$service2 = mb_convert_encoding($service2, "cp1251", "utf8");

$to = "goshazvir@gmail.com";
$headers ="From: <$to>\n";
$headers.="X-Mailer: PHP/".phpversion()."\n";
$headers.="Content-Type: text/html; charset=cp1251";
$subject = "Заявка на: ";
$message = "
<table>
<tr>
    <td><strong>Услуга:</strong></td>
    <td> $service2 </td>
</tr>
<tr>
    <td><strong>Имя:</strong></td>
    <td> $name2 </td>
</tr>
<tr>
    <td><strong>Почта:</strong></td>
    <td> $adress2 </td>
</tr>
<tr>
    <td><strong>Сайт:</strong></td>
    <td> $site2 </td>
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