<?php
// Allow CORS for local development (important for React + PHP)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Collect form data safely
$name = htmlspecialchars(trim($_POST['name'] ?? ''));
$email = htmlspecialchars(trim($_POST['email'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo "Please fill all required fields.";
    exit;
}

// Your target email (where you want to receive messages)
$to = "your_email@gmail.com"; // ⬅️ Replace this with your email

$subject = "📩 New Contact Form Message from $name";
$body = "
You have received a new message from your portfolio site.

👤 Name: $name
📧 Email: $email
💬 Message:
$message
";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Try sending email
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "Message sent successfully.";
} else {
    http_response_code(500);
    echo "Failed to send message. Check your server mail configuration.";
}
?>
