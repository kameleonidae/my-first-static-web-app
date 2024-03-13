//Seconde vérification de tout les zones après avoir appuyé sur "Suivant"

/*
stepUp(container1, container4, (valid)=>{// A SUPPRIMER TEST
    valid()
})*/

continueBtn1.addEventListener("click", ()=>{
    stepUp(container1, container2, (valid, failed)=>{
        setValidityUsername().then(()=>{
            setValidityPassword()
            setValidityCPassword()
            if(getValidity1()){
                valid()
            }else{
                failed()
            }
        })
    })
})

previousBtn0.addEventListener("click", ()=>{
    stepDown(container2 ,container1)
})

continueBtn2.addEventListener("click", ()=>{
    stepUp(container2, container3, (valid, failed)=>{
        setValidityName()
        setValiditySecondName()
        setValidityDateNais()
        if(getValidity2()){
            valid()
        }else{
            failed()
        }
    })
})

previousBtn1.addEventListener("click", ()=>{
    stepDown(container3, container2)
})
continueBtn3.addEventListener("click", ()=>{
    stepUp(container3, container4, (valid, failed)=>{
        getValidity3().then((bool)=>{
            let isEmpty = false
            for(let x of [numeroR, rue, cdPostal, ville]){
                if(x.value.length < 1){
                    addValidCss(x)
                    x.setCustomValidity("Le champ est vide")
                    isEmpty = true
                }
            }
            if(!isEmpty){
                if(bool){
                    valid()
                }else{
                    failed()
                    setTimeout(()=>{
                        errMsgAdrss.classList.remove("hidden")
                        setTimeout(()=>{
                            errMsgAdrss.classList.remove("h-0")
                            errMsgAdrss.classList.add("h-16")
                            errMsgAdrss.classList.remove("opacity-0")
                        }, 200)
                    },200)
                }  
            }else{
                failed()
            }
            
        })
        
    })
})

btnAdrValid.addEventListener("click",()=>{
    stepUp(container3, container4, (valid, failed)=>{
        let isEmpty = false
        for(let x of [numeroR, rue, cdPostal, ville]){
            if(x.value.length < 1){
                addValidCss(x)
                x.setCustomValidity("Le champ est vide")
                isEmpty = true
            }
        }

        if(!isEmpty){
            valid()
        }else{
            failed()
        }
    })
    
})

previousBtn2.addEventListener("click", ()=>{
    stepDown(container4, container3)
})

continueBtn4.addEventListener("click", ()=>{
    stepUp(container4, container5, (valid, failed)=>{
        if(getValidity4()){
            valid()
            verificationFinal()
        }else{
            failed()
        }
    })
})




