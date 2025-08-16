<?php
session_start();
$conn = new mysqli("sql112.infinityfree.com", "if0_39565548", "23ubIau4FKcAK", "if0_39565548_maunoply");
$sql = "SELECT host FROM parties WHERE id_partie = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i",  $_SESSION['id_partie']);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();
$isHost = ($row['host'] === $_SESSION['user'] );
$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Saloon</title>
  <link rel="stylesheet" href="saloon.css" />
</head>
<body>
  <h1>Salle d'attente</h1>
  <div id="joueurs">
    <h2>Joueurs dans la partie :</h2>
    <ul id="liste-joueurs"></ul>
    <script src="saloon.js" defer></script>
  </div>
    <?php if ($isHost): ?>
      <button id="start-btn">Commencer la partie</button>
    <?php endif; ?>
</body>
</html>

