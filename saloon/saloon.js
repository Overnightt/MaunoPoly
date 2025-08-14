function updateListejoueur() {
fetch("chercherjouer.php")
    .then(response => response.json())
        .then(data => {
            const playerListDiv = document.getElementById("liste-joueurs");
            playerListDiv.innerHTML = "";
            data.forEach(player => {
                const p = document.createElement("p");
                p.textContent = player.username; 
                playerListDiv.appendChild(p);
            });
        });
}
updateListejoueur();
setInterval(updateListejoueur, 2000);
