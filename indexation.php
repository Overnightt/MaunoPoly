<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();
$conn = new mysqli ("sql112.infinityfree.com","if0_39565548","23ubIau4FKcAK", "if0_39565548_maunoply");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST["username"];
    $password = $_POST["pwd"];
    $stmt = $conn->prepare("SELECT * FROM maunopoly WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        $_SESSION['user'] = $user['username'];
        header("Location: hub.html");
        exit;
    } else {
        echo "Nom d'utilisateur ou mot de passe incorrect.";
    }
    $stmt->close();
}
$conn->close();
?>