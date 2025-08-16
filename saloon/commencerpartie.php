<?php
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$conn = new mysqli("sql112.infinityfree.com", "if0_39565548", "23ubIau4FKcAK", "if0_39565548_maunoply");
$sql = "UPDATE parties SET status = 'started' WHERE host = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $_SESSION['user']);
$stmt->execute();
$stmt->close();
$conn->close()
?>