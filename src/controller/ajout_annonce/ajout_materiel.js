
    function verifType() {
        var materielRadio = document.getElementById("materiel");
        var estMaterielDiv = document.getElementById("estMateriel");

        if (materielRadio.checked) {
            estMaterielDiv.style.display = "block"; 
        } else {
            estMaterielDiv.style.display = "none"; 
        }
    }

    var radios = document.getElementsByName('type');
    for (var i = 0; i < radios.length; i++) {
        radios[i].addEventListener('change', verifType);
    }

    verifType();
