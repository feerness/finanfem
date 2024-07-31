<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Aquí puedes agregar el código para enviar el mensaje por correo electrónico
    // Por ejemplo:
    $destinatario = "contacto@ejemplo.com";
    $asunto = "Nuevo mensaje de contacto desde el sitio web";
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Email: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje";

    // Envío de correo
    mail($destinatario, $asunto, $contenido);

    // Redirección o mensaje de confirmación
    echo "<p class='text-center mt-3'>¡Gracias! Tu mensaje ha sido enviado.</p>";
}
?>
