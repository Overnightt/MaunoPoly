<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();
$conn = new mysqli("sql112.infinityfree.com", "if0_39565548", "23ubIau4FKcAK", "if0_39565548_maunoply");
$input = json_decode(file_get_contents('php://input'), true);
$id_partie = $input['id_partie'];
$host = $_SESSION['user'];
$res = $conn->query("SELECT player_id FROM joueurs WHERE username = '$host'");
$row = $res->fetch_assoc();
$id_joueur = $row['player_id'];
$conn->query("UPDATE parties SET joueurs_actuel = joueurs_actuel + 1 WHERE id_partie = $id_partie");
$stmt = $conn->prepare("INSERT INTO joueur_partie (id_joueur, id_partie) VALUES (?, ?)");
$stmt->bind_param("ii", $id_joueur, $id_partie);
$stmt->execute();
$stmt->close();
$conn->close();
?>
