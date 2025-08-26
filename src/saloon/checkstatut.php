<?php
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$conn = new mysqli("sql112.infinityfree.com", "if0_39565548", "23ubIau4FKcAK", "if0_39565548_maunoply");
$sql = "SELECT statut FROM parties WHERE id_partie = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $_SESSION['id_partie']);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();
echo $row['statut'];
$stmt->close();
$conn->close();
?>
