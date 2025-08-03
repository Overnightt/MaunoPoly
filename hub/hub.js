fetch("chercherpartie.php")
  .then(response => response.json())
  .then(data => {
    const ListeDiv = document.getElementById("liste");
    data.forEach(game => {
      const newGame = document.createElement("div");
      newGame.classList.add("partie");
      newGame.textContent = "Partie #" + game.id_partie + " — Host: " + game.host + " — " + game.joueurs_actuel + " joueurs";
      ListeDiv.appendChild(newGame);
      const Button = document.createElement("button");
      Button.classList.add("join-button");
      Button.textContent = "Join";
      newGame.appendChild(Button);
      Button.addEventListener("click", () => {
        fetch("rejoindrepartie.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id_partie: game.id_partie
          })
        })
        .then(() => {
          window.location.href = "saloon.html";
        });
      });
    });
  });



