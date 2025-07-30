<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();
$conn = new mysqli ("sql112.infinityfree.com","if0_39565548","23ubIau4FKcAK", "if0_39565548_maunoply");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $stmt = $conn->prepare("INSERT INTO parties (host, statut, joueurs_actuel) VALUES (?, ?, ?)");
    $host = $_SESSION['user'];
    $statut = 'en-attente';
    $joueurs = 1;
    $stmt->bind_param("ssi", $host, $statut, $joueurs);
    $stmt->execute();
    $stmt->close();
}
$conn->close();
header("Location: hub.html");
exit;
?>