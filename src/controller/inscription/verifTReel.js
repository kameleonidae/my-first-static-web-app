//Première Vérification temps réel des zones

//-------------------First Page Element--------------------
const user = document.querySelector("#user")
user.setCustomValidity(" ")
const psword = document.querySelector("#psword")
psword.setCustomValidity(" ")
const cpsword = document.querySelector("#cpsword")
cpsword.setCustomValidity(" ")

const icon1 = document.querySelector("#icon1")

const btnView1 = document.querySelector("#btnView1")
const btnView2 = document.querySelector("#btnView2")

//-------------------2nd Page Element--------------------
const nameTxt = document.querySelector("#name")
nameTxt.setCustomValidity(" ")
const secndName = document.querySelector("#secndName")
secndName.setCustomValidity(" ")
const dateNais = document.querySelector("#dateNais")
dateNais.setCustomValidity(" ")

const icon2 = document.querySelector("#icon2")

//-------------------3rd Page Element--------------------
const numeroR = document.querySelector("#numeroR")
numeroR.setCustomValidity(" ")
const rue = document.querySelector("#rue")
rue.setCustomValidity(" ")
const cdPostal = document.querySelector("#cdPostal")
cdPostal.setCustomValidity(" ")
const ville = document.querySelector("#ville")
cdPostal.setCustomValidity(" ")
const errMsgAdrss = document.querySelector("#errAdress")
const btnAdrValid = document.querySelector("#btnAdrValid")

const icon3 = document.querySelector("#icon3")

//------------------4th Page Element------------------------
nT.setCustomValidity(" ")
const icon4 = document.querySelector("#icon4")

//------------------Final Page Element------------------------
const icon5 = document.querySelector("#icon5")
const titleFinal = document.querySelector("#titleFinal")
const titleMsg = document.querySelector("#titleMsg")
const titleMsgChild = titleMsg.children[0]

//----------------------OTHER----------------------------
const textInputs = [user, psword, cpsword, nameTxt, secndName, dateNais, numeroR, rue, cdPostal, ville, nT]


const container1 = document.querySelector("#container1")
const container1Grayscale = document.querySelector("#container1Grayscale")
const continueBtn1 = document.querySelector("#continueBtn1")

const container2 = document.querySelector("#container2")
const continueBtn2 = document.querySelector("#continueBtn2")
const previousBtn0 = document.querySelector("#previousBtn0")

const container3 = document.querySelector("#container3")
const continueBtn3 = document.querySelector("#continueBtn3")
const previousBtn1 = document.querySelector("#previousBtn1")

const container4 = document.querySelector("#container4")
const continueBtn4 = document.querySelector("#continueBtn4")
const previousBtn2 = document.querySelector("#previousBtn2")

const container5 = document.querySelector("#container5")





const url = "http://localhost:3000/"

function getApi(urlApi){
    return fetch(urlApi).then((result)=>{
        return result.json().then((result)=>{
            return result
        }).catch((e)=>{
            console.log(e)
        })
    }).catch((e)=>{
        console.log(e)
    })

}

//Ajout Manuellement les événements d'invalidité.
function addValidCss(element){
    !element.classList.contains("invalid:bg-red-50")?element.classList.add("invalid:bg-red-50"):{}
    !element.classList.contains("invalid:border-red-300")?element.classList.add("invalid:border-red-300"):{}
    !element.classList.contains("valid:bg-green-50")?element.classList.add("valid:bg-green-50"):{}
    !element.classList.contains("valid:border-green-300")?element.classList.add("valid:border-green-300"):{}

    !element.classList.contains("focus:invalid:bg-red-50")?element.classList.add("focus:invalid:bg-red-50"):{}
    !element.classList.contains("focus:invalid:border-red-300")?element.classList.add("focus:invalid:border-red-300"):{}
    !element.classList.contains("focus:valid:bg-green-50")?element.classList.add("focus:valid:bg-green-50"):{}
    !element.classList.contains("focus:valid:border-green-300")?element.classList.add("focus:valid:border-green-300"):{}
}

//Visualise l'erreur de la zone de Texte séléctionné
for (const inputText of textInputs){
    inputText.addEventListener("focus", inputText.reportValidity)
}

//--------------------------------------Première Page-------------------------------------------
function checkAllErr1(){
    if(getValidity1()){
        continueBtn1.disabled=false
        icon1.classList.add("w-8")
        icon1.classList.remove("w-0")
    }else{
        continueBtn1.disabled=true
        icon1.classList.add("w-0")
        icon1.classList.remove("w-8")
    }
}

function getValidity1(){
    return user.validity.valid*psword.validity.valid*cpsword.validity.valid
}

async function setValidityUsername(){
    addValidCss(user)
    if(user.value.length < 6){
        user.setCustomValidity("L'identifiant doit contenir au moins 6 caractères.")
    }else if(user.value.length > 20){
        user.setCustomValidity("L'identifiant doit contenir au plus 20 caractères.")
    }else{
        const results = await getApi(url+"/api/usernameExist?username="+user.value)
        if(results.valid){
            user.setCustomValidity("")
        }else{
            user.setCustomValidity("Cet identifiant n'est pas disponible.")
        }
    }
}

function setValidityPassword(){
    addValidCss(psword)

    const msg = "Le mot de passe doit contenir au moins : \n";
    var strE = ""

    if(psword.value.length < 8){
        strE = strE + " - 8 Caractères\n"
    }
    if(!psword.value.match("[A-Z]")){
        strE = strE + " - 1 Majuscule\n"
    }
    if(!psword.value.match("[a-z]")){
        strE = strE + " - 1 Minuscule\n"
    }
    if(!psword.value.match("[0-9]")){
        strE = strE + " - 1 Chiffre\n"
    }
    if(!psword.value.match("[!-/]") && !psword.value.match("[:-@]") && !psword.value.match("[[-`]") && !psword.value.match("[{-≈]")){
        strE = strE + " - 1 Caractère spécial\n"
    }
    strE.length>0?strE=msg+strE : {}
    psword.setCustomValidity(strE)

    if(strE.length>0){
        return false
    }else{
        return true
    }
}

function setValidityCPassword(){
    addValidCss(cpsword)
    if(cpsword.value !== psword.value){
        cpsword.setCustomValidity("Les mots de passe ne sont pas identiques.")
    }else{
        cpsword.setCustomValidity("")
    }
}

user.addEventListener("input", ()=>{
    //--Replace bad char
    var fnlValue = "";
    for(const letter of user.value){
        if((letter.match("[a-z]")||letter.match("[A-Z]")||letter.match("[0-9]") && letter !== " ")){
            fnlValue=fnlValue+letter
        }
    }

    var cursorPos;
    fnlValue.length===user.value.length? cursorPos=user.selectionStart : cursorPos=user.selectionStart-1
    user.value=fnlValue
    
    user.selectionEnd = cursorPos
    user.selectionStart = cursorPos
    //----------------------

    setValidityUsername().then(()=>{
        user.reportValidity()
        checkAllErr1()
    })
    
})

psword.addEventListener("input", ()=>{
    var fnlValue = "";
    for(const letter of psword.value){
        if(letter!==" "){
            fnlValue=fnlValue+letter
        }
    }

    var cursorPos;
    fnlValue.length===psword.value.length? cursorPos=psword.selectionStart : cursorPos=psword.selectionStart-1
    psword.value=fnlValue
    
    psword.selectionEnd = cursorPos
    psword.selectionStart = cursorPos

    setValidityPassword()
    setValidityCPassword()
    psword.reportValidity()
    checkAllErr1()
})

cpsword.addEventListener("input", ()=>{
    setValidityCPassword()
    cpsword.reportValidity()
    checkAllErr1()

})

//-----------------------------------------------------------------------------------------------
//---------------------------------------Deuxième Page-------------------------------------------

function checkAllErr2(){
    if(getValidity2()){
        continueBtn2.disabled=false
        icon2.classList.add("w-8")
        icon2.classList.remove("w-0")
    }else{
        continueBtn2.disabled=true
        icon2.classList.add("w-0")
        icon2.classList.remove("w-8")
    }
}

function getValidity2(){
    return nameTxt.validity.valid*secndName.validity.valid*dateNais.validity.valid
}

function setValidityName(){
    addValidCss(nameTxt)
    if(nameTxt.value.length < 2){
        nameTxt.setCustomValidity("Votre nom doit contenir au moins 2 caractères.")
    }else{
        nameTxt.setCustomValidity("")
    }
}

function setValiditySecondName(){
    addValidCss(secndName)
    if(secndName.value.length < 2){
        secndName.setCustomValidity("Votre prénom doit contenir au moins 2 caractères.")
    }else{
        secndName.setCustomValidity("")
    }
}

function setValidityDateNais(){
    addValidCss(dateNais)
    const dateNaisObj = new Date(dateNais.value)
    const diffMill = Date.now()-dateNaisObj.getTime()
    const ageDate = new Date(diffMill)
    const age = ageDate.getFullYear()-1970

    if (age < 0){
        dateNais.setCustomValidity("Votre date de naissance doit être supérieur à celle d'aujourd'hui")
    }else if(age < 18 ){
        dateNais.setCustomValidity("Il faut au moins avoir 18 ans.")
    }else{
        dateNais.setCustomValidity("")
    }
}

nameTxt.addEventListener("input", ()=>{
    let fnlValue = ""
    nameTxt.value = nameTxt.value.toUpperCase()
    for(const letter of nameTxt.value){
        if(letter.match("[A-Z]") || letter == " "){
            fnlValue=fnlValue + letter
        }
    }
    nameTxt.value = fnlValue

    setValidityName()
    nameTxt.reportValidity()
    checkAllErr2()
})

secndName.addEventListener("input", ()=>{
    let fnlValue = ""
    secndName.value = secndName.value
    for(const letter of secndName.value){
        if(letter.match("[A-Z]") || letter.match("[a-z]") || letter == " "){
            fnlValue=fnlValue + letter
        }
    }
    secndName.value = fnlValue

    setValiditySecondName()
    secndName.reportValidity()
    checkAllErr2()
})

dateNais.addEventListener("input", ()=>{
    setValidityDateNais()
    dateNais.reportValidity()
    checkAllErr2()
})

//------------------------Third Page---------------------


async function sendToApi(filter=""){
    const urlApiAddress = "https://api-adresse.data.gouv.fr/search/?q="
    const querry = (numeroR.value+" "+rue.value+" "+cdPostal.value+" "+ville.value).trim()
    if(querry.length >= 3){
        const result = await getApi(urlApiAddress+querry+"&type="+filter+"&autocomplete=1")
        let datalistArrR = []
        let datalistArrPc = []
        let datalistArrC = []
        
        for(let x of result.features){
            if(x.properties.street && !datalistArrR.includes(x.properties.street)){
                datalistArrR.push(x.properties.street)
            }
            if(x.properties.postcode && !datalistArrPc.includes(x.properties.postcode)){
                datalistArrPc.push(x.properties.postcode)
            }
            if(x.properties.city && !datalistArrC.includes(x.properties.city)){
                datalistArrC.push(x.properties.city)
            }
        }

        let datalistR = ""
        let datalistPc = ""
        let datalistC = ""

        for(let x of datalistArrR){
            datalistR += "<option value='"+x+"'></option>"
        }
        for(let x of datalistArrPc){
            datalistPc += "<option value='"+x+"'></option>"
        }
        for(let x of datalistArrC){
            datalistC += "<option value='"+x+"'></option>"
        }
        rue.nextElementSibling.innerHTML = datalistR
        cdPostal.nextElementSibling.innerHTML = datalistPc
        ville.nextElementSibling.innerHTML = datalistC

        return result
    }else{
        return null
    }
}

async function getValidity3(){
    const result = await sendToApi()
    if(result){
        if(result.features.length>0){
            if(result.features[0].properties.score >= 0.9){
                return true
            }
        }
    }
    
    return false
}

function checkAllErr3(){
        const condition = (numeroR.value.length > 0)*(rue.value.length > 0)*(cdPostal.value.length > 0)*(ville.value.length > 0)
        if(condition){
            continueBtn3.disabled=false
            checkAdressIsValid()
        }else{
            continueBtn3.disabled=true
        }
}

function checkAdressIsValid(){
    getValidity3().then((bool)=>{
        if(bool){
            continueBtn3.classList.remove("bg-white")
            continueBtn3.classList.remove("border-2")
            continueBtn3.classList.remove("border-blue-400")
            continueBtn3.classList.remove("text-blue-400")
            continueBtn3.classList.remove("hover:bg-blue-50")

            continueBtn3.classList.add("bg-blue-400")
            continueBtn3.classList.add("text-white")
            continueBtn3.classList.add("hover:bg-blue-500")

            icon3.classList.add("w-8")
            icon3.classList.remove("w-0")
        }else{
            continueBtn3.classList.add("bg-white")
            continueBtn3.classList.add("border-2")
            continueBtn3.classList.add("border-blue-400")
            continueBtn3.classList.add("text-blue-400")
            continueBtn3.classList.add("hover:bg-blue-50")

            continueBtn3.classList.remove("bg-blue-400")
            continueBtn3.classList.remove("text-white")
            continueBtn3.classList.remove("hover:bg-blue-500")

            icon3.classList.add("w-0")
            icon3.classList.remove("w-8")
        }
    })
}

numeroR.addEventListener("input",()=>{
    let fnlStr = ""
    for(const letter of numeroR.value){
        if(letter.match("[0-9]") ){
            fnlStr=fnlStr + letter
        }
    }

    numeroR.value=fnlStr

    if(numeroR.value.length>0){
        numeroR.setCustomValidity("")
        numeroR.reportValidity()
    }
    sendToApi()
    checkAllErr3()
})

rue.addEventListener("input",()=>{
    if(rue.value.length>0){
        rue.setCustomValidity("")
        rue.reportValidity()
    }
    sendToApi()
    checkAllErr3()
})

cdPostal.addEventListener("input",()=>{
    if(cdPostal.value.length>0){
        cdPostal.setCustomValidity("")
        cdPostal.reportValidity()
    }

    let fnlStr = ""
    for(const letter of cdPostal.value){
        if(letter.match("[0-9]") ){
            fnlStr=fnlStr + letter
        }
    }

    cdPostal.value=fnlStr

    sendToApi()
    checkAllErr3()
})

ville.addEventListener("input",()=>{
    if(ville.value.length>0){
        ville.setCustomValidity("")
        ville.reportValidity()
    }
    sendToApi()
    checkAllErr3()
})

//--------------------------4rth Page--------------------------

function getValidity4(){
    addValidCss(nT)
    const valueSplit = nT.value.split(" ")
    const valueWithoutSpace = valueSplit.join("")
    let err = false;

    if(valueWithoutSpace.length < 10){
        nT.setCustomValidity("Votre numéro de téléphone doit comporter 10 chiffres")
    }else if(valueSplit[0] !== "06" && valueSplit[0] !== "07" && valueSplit[0] !== "03"){
        nT.setCustomValidity("Votre numéro de téléphone doit commencer par 06, 07 ou 03")
    }else{
        err=true
        nT.setCustomValidity("")
    }

    return err
}

function checkAllErr4(){
    if(getValidity4()){
        continueBtn4.disabled=false
        icon4.classList.add("w-8")
        icon4.classList.remove("w-0")
    }else{
        continueBtn4.disabled=true
        icon4.classList.add("w-0")
        icon4.classList.remove("w-8")
    }
}

//---------------------FINAL PAGE--------------------------

const success = true

function verificationFinal(){
    setTimeout(()=>{
        if(success){
            icon5.src = "https://cdn.lordicon.com/oqdmuxru.json"
            icon5.trigger = "in"
            icon5.state="morph-check-in-1"
            icon5.colors="primary:#22c55e"

            icon5.classList.remove("h-32")
            icon5.classList.remove("w-32")
            icon5.classList.add("h-40")
            icon5.classList.add("w-40")

            titleFinal.classList.remove("text-blue-500")
            titleFinal.classList.add("text-green-500")

            titleMsgChild.classList.add("text-green-500")
            titleMsgChild.textContent = "Succès"
            titleMsg.classList.remove("h-0")
            titleMsg.classList.add("h-10")
        }else{
            icon5.src = "https://cdn.lordicon.com/nqtddedc.json"
            icon5.trigger = "in"
            icon5.state="hover-cross-3"
            icon5.colors="primary:#ef4444"

            icon5.classList.remove("h-32")
            icon5.classList.remove("w-32")
            icon5.classList.add("h-40")
            icon5.classList.add("w-40")

            titleFinal.classList.remove("text-blue-500")
            titleFinal.classList.add("text-red-500")

            titleMsgChild.classList.add("text-red-500")
            titleMsgChild.textContent = "Echec"
            titleMsg.classList.remove("h-0")
            titleMsg.classList.add("h-10")
            
        }
        
    },2000)
}
