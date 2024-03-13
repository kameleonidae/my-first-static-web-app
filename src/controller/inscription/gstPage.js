//Gestion des pages, Permet de passer à la suivante ou de revenir à celle d'avant

function stepUp(containerNow ,containerFoward, callback){
    //Animation Verif
    containerNow.classList.add("grayscale")
    containerNow.classList.add("opacity-75")
    containerNow.classList.add("scale-90")
    containerNow.classList.add("disabled")
    //---------------

    callback(valid, failed)
    
    function valid(){
        setTimeout(()=>{
        //Animation Valid
            containerNow.classList.add("-translate-x-full")
            containerNow.classList.remove("opacity-75")
            containerNow.classList.add("opacity-0")
            setTimeout(()=>{
                containerNow.classList.add("hidden")
                containerFoward.classList.contains("disabled")?containerFoward.classList.remove("disabled"):{}
                containerFoward.classList.remove("hidden")
                setTimeout(()=>{
                    containerFoward.classList.remove("translate-x-full")
                    containerFoward.classList.remove("opacity-0")
                    
                }, 50)
            }, 300)
        }, 300)
    }

    function failed(){
        setTimeout(()=>{
            containerNow.classList.remove("grayscale")
            containerNow.classList.remove("opacity-75")
            containerNow.classList.remove("scale-90")
            containerNow.classList.remove("disabled")
        }, 300)
        
    }
}

function stepDown(containerNow, containerBefore){
    containerNow.classList.add("opacity-0")
    containerNow.classList.add("disabled")
    containerNow.classList.add("translate-x-full")

    setTimeout(()=>{
        containerNow.classList.add("hidden")

        containerBefore.classList.remove("scale-90")
        containerBefore.classList.remove("disabled")
        containerBefore.classList.remove("grayscale")
        containerBefore.classList.remove("hidden")

        setTimeout(()=>{
            containerBefore.classList.remove("-translate-x-full")
            containerBefore.classList.remove("opacity-0")
        }, 50)
            
    }, 300)
}
