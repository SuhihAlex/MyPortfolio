<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Формируем заголовки для HTML-письма
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // Отправка электронного письма
    $to = 'suhari93@mail.ru'; // Ваша почта
    $subject = 'New message from website';
    
    // Считываем HTML-шаблон письма
    $email_template = file_get_contents('email_template.html');
    
    // Заменяем placeholders на данные из формы
    $email_template = str_replace('$name', $name, $email_template);
    $email_template = str_replace('$email', $email, $email_template);
    $email_template = str_replace('$message', $message, $email_template);
    
    // Отправляем письмо
    if(mail($to, $subject, $email_template, $headers)) {
        echo 'Message sent successfully!';
    } else {
        http_response_code(500);
        echo 'Unable to send message. Please try again later.';
    }
} else {
    http_response_code(403);
    echo 'Forbidden';
}
?>
