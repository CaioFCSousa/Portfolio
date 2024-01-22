const menu = document.querySelector(".icone_menu i")
const menu_celular = document.querySelector(".menu_celular")
const feixaBtn = document.querySelector(".menu_celular i")

menu.addEventListener("click",()=>{
    console.log("clicado")
    menu_celular.style.right = "0px"
    menu.style.display = "none"
})
feixaBtn.addEventListener("click",()=>{
    menu_celular.style.right = "-150px"
    menu.style.display = "block"
})