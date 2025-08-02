  .then(response => response.json())
  .then(data => {
    const ListeDiv = document.getElementById("liste");
    data.forEach(game => {
      const newGame = document.createElement("div");
      newGame.textContent = "Partie #" + game.id_partie + " — Host: " + game.host + " — " + game.joueurs_actuel + " joueur(s)";
      ListeDiv.appendChild(newGame);
    });
  });
