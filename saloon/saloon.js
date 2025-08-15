function updateListejoueur() {
fetch("chercherjoueur.php")
    .then(response => response.json())
        .then(data => {
            const playerListDiv = document.getElementById("liste-joueurs");
            playerListDiv.innerHTML = "";
            data.forEach(username => {
                const li = document.createElement("li");
                li.textContent = username; 
                playerListDiv.appendChild(li);
            });
        });
}
updateListejoueur();
setInterval(updateListejoueur, 2000);

