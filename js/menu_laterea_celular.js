const menu = document.querySelector(".icone_menu i")
const menu_celular = document.querySelector(".menu_celular")
const estilo = document.querySelector(".estilo")

document.addEventListener("click",(evt)=>{
    if(evt.target.className === "fa-solid fa-bars menu"){
        menu_celular.style.right = "0px"
        menu.style.display = "none"
        
    }
    if(evt.target.className === "material-symbols-outlined fechar"){
        menu_celular.style.right = "-150px"
        menu.style.display = "block"
    }
})
window.addEventListener('resize', function(evt){
    if(this.window.innerWidth>926){
        menu.style.display = "none"
    }else{
        menu.style.display = "block"
    }
})