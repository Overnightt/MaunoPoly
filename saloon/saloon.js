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

function checkPartie() {
    fetch("checkstatut.php")
        .then(response => response.text())
        .then(statut => {
            if (statut === "en-cours") {
                window.location.href = "game.html"; 
            }
        });
}

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    if (startBtn) { 
        startBtn.addEventListener("click", () => {
            fetch("commencerpartie.php", { method: "POST" })
                .then(response => response.text())
                .then(res => {
                    if (res === "ok") {
                        window.location.href = "game.html";
                    } 
                })
        });
    }
});
updateListejoueur();
checkPartie();
setInterval(checkPartie, 2000);
setInterval(updateListejoueur, 2000);
