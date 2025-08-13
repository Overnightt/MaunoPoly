<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$conn = new mysqli("sql112.infinityfree.com", "if0_39565548", "23ubIau4FKcAK", "if0_39565548_maunoply");
$sql = "SELECT joueurs.username FROM joueur_partie JOIN joueurs ON joueur_partie.id_joueur = joueurs.player_id WHERE joueur_partie.id_partie = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id_partie);
$stmt->execute();
$result = $stmt->get_result();
$joueur = [];
while ($row = $result->fetch_assoc()) {
    $joueur[] = $row['username'];
}
header('Content-Type: application/json');
echo json_encode($players);
$stmt->close();
$conn->close();
?>
