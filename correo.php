<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['message'];


$para = 'rodavlasxp@gmail.com';
$asunto = `Contacto Lorenzo's`;
$mensaje = 'Este mensaje fue enviado por ' . $name . ', su email es ' . $mail . ', su telefono es ' . $phone . ', el mensaje es: ' . $message . "\r\n";

$header  = 'MIME-Version: 1.0' . "\r\n";
$header .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$header .= 'From: '. $mail . "\r\n";
mail($para, $asunto, utf8_decode($mensaje), $header);


echo "
 <h4>Su mensaje se ha enviado correctamente</h4>

<script>


    setTimeout(()=>{window.location='index.html'}, 3000);
</script>";

?>