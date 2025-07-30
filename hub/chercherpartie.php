<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$conn = new mysqli("sql112.infinityfree.com", "if0_39565548", "23ubIau4FKcAK", "if0_39565548_maunoply");
$sql = "SELECT id_partie, host, statut, joueurs_actuel FROM parties WHERE statut = 'en-attente'";
$result = $conn->query($sql);
$parties = [];
while ($row = $result->fetch_assoc()) {
    $parties[] = $row;
}
echo json_encode($parties);
$conn->close();
?>