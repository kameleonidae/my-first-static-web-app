//FOnctionnalité de visibilité du Mot de passe

btnView1.addEventListener("click",()=>{
    if(btnView1.textContent.trim() == "visibility"){
        btnView1.textContent="visibility_off"
        psword.type="text"
    }else{
        btnView1.textContent="visibility";
        psword.type="password"
    }
})

btnView2.addEventListener("click",()=>{
    if(btnView2.textContent.trim() == "visibility"){
        btnView2.textContent="visibility_off"
        cpsword.type="text"
    }else{
        btnView2.textContent="visibility";
        cpsword.type="password"
    }
})