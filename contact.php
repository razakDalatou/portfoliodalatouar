<?php  
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header('Content-Type: application/json');

    $nom = htmlspecialchars(trim($_POST["nom"]));
    $prenom = htmlspecialchars(trim($_POST["prenom"]));
    $email = htmlspecialchars(trim($_POST["mail"]));
    $text = htmlspecialchars(trim($_POST["text"]));

    if (empty($nom) || empty($prenom) || empty($email) || empty($text)) {
        echo json_encode(["status" => "error", "message" => "Tous les champs doivent être renseignés !"]);
        exit;
    }

    $to = "abdelrazak.dalatou@gmail.com";
    $objet = "[NOUVEAU MESSAGE de la part de $nom $prenom]";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Nom : $nom $prenom\n";
    $body .= "Email: $email\n"; 
    $body .= "Message :\n$text\n";

    if (mail($to, $objet, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Votre message a bien été envoyé"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Erreur lors de l'envoi...."]);
    }
} else {
    header('Content-Type: application/json');
    echo json_encode(["status" => "error", "message" => "Méthode non autorisée !"]);
}
?>
