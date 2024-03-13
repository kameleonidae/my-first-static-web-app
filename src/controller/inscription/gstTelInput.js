//Gestion de la mise en page de la zone de texte Numéro de téléphone

const nT = document.querySelector("#nT")

nT.addEventListener("input",()=>{
    const valueWithoutSpace = nT.value.split(" ").join("")
    let fnlValue = ""
    let count = 0;
    for(let number of valueWithoutSpace){
        if(number.match("[0-9]")){
            if(count==2){
                count=0
                fnlValue+=" "
            }
            count++
            fnlValue+=number
        }
    }

    let cursorPos
    if(nT.selectionStart !== nT.value.length){
        cursorPos = nT.selectionStart
    }else{  
        cursorPos = fnlValue.length;
    }

    nT.value = fnlValue
    
    nT.selectionEnd = cursorPos
    nT.selectionStart = cursorPos

    checkAllErr4()
    nT.reportValidity()
})

