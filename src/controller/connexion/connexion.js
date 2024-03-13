function verifIdentifiant() {
    var identifiant = document.getElementById("user").value;
    if (identifiant.length > 24 || identifiant.length < 4) {
        document.getElementById("erreur").innerText = "Erreur";
    }
    else{
        document.getElementById("erreur").innerText = null;
    }
}

document.getElementById("connexion").addEventListener("click", verifIdentifiant);
