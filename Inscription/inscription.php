<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
$conn = new mysqli ("sql112.infinityfree.com","if0_39565548","23ubIau4FKcAK", "if0_39565548_maunoply");
$username = $_POST['username'];
$password = $_POST['pwd'];
$sql = "INSERT INTO joueurs (username, password) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $password);  
$stmt->execute();
$stmt->close(); 
$conn->close(); 
?>