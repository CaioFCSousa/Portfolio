const elementos = document.querySelectorAll("*")

const sol = document.querySelector(".sol")
const lua = document.querySelector(".lua")

sol.addEventListener("click",()=>{
    blackMode()
    sol.style.display = "none"
    lua.style.display = "block"
    
})
lua.addEventListener("click",()=>{
    whiteMode()
    lua.style.display = "none"
    sol.style.display = "block"
   
})


function  whiteMode(){
    
    document.body.style.backgroundColor = "var(--cor-bg-tm-branco)"
    document.body.style.color = "var(--cor-txt-tm-branco)"
    document.querySelectorAll(".type_pj").forEach((el)=>{
        el.style.color = "var(--cor-txt-tm-preto)"
    })
    document.querySelectorAll(".redes").forEach((el)=>{
        el.style.color = "var(--cor-txt-tm-branco)"
        el.style.borderColor = "var(--cor-txt-tm-branco)"
    })
   
}
function blackMode(){
    document.body.style.backgroundColor = "var(--cor-bg-tm-preto)"
    document.body.style.color = "var(--cor-txt-tm-preto)"
    document.querySelectorAll(".redes").forEach((el)=>{
        el.style.color = "var(--cor-txt-tm-preto)"
        el.style.borderColor = "var(--cor-txt-tm-preto)"
    })
    

}
