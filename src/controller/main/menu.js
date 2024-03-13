
const menuBtn = document.querySelector("#menuBtn")
const menuContainer = document.querySelector("#menuContainer")
const btnLogin = document.querySelectorAll("#loginBtn")
const btnLogup = document.querySelectorAll("#logupBtn")


for(const x of btnLogin){
    x.addEventListener("click", ()=>{
        window.location="./view/connexion/"
    })
}

for(const x of btnLogup){
    x.addEventListener("click", ()=>{
        window.location="./view/inscription/"
    })
}


menuBtn.addEventListener("click",()=>{
    const icon = menuBtn.children[0]
    if(icon.classList.contains("rotate-180")){
        icon.classList.remove("rotate-180")
        icon.classList.add("rotate-0")

        menuContainer.classList.remove("h-0")
        menuContainer.classList.add("h-full")
    }else{
        icon.classList.remove("rotate-0")
        icon.classList.add("rotate-180")

        menuContainer.classList.remove("h-full")
        menuContainer.classList.add("h-0")
    }
})

