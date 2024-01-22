const lua = document.querySelector('.temas .lua')
const sol = document.querySelector('.temas .sol')
const sidebar = document.querySelector(".sidebar")
const aria_projeto = document.querySelectorAll(".aria_projeto")
const tecnologia = document.querySelector(".tecnologia a")
const pj = document.querySelectorAll(".pj")
const name_pj = document.querySelectorAll(".name_pj")
const aria_projetoA = document.querySelectorAll(".aria_projeto a")

console.log(aria_projeto)
lua.addEventListener("click",(evt)=>{
    document.body.style.backgroundColor = "var(--cor-bg-tm-branco)"
    document.body.style.color = "var(--cor-txt-tm-branco)"
    sidebar.style.backgroundColor = "var(--cor-bg-sidebar-tm-branco)"
    aria_projeto.forEach((el)=>{
        el.style.backgroundColor = "var(--cor-bg-ariaProjeto-branco)"
    })
    name_pj.forEach((el)=>{
        el.style.color = "#000000"
    })
    aria_projetoA.forEach((el)=>{
        el.style.color = "#000000"
    })


    lua.style.display = "none"
    sol.style.display = 'block'

})
sol.addEventListener("click",(evt)=>{
    document.body.style.backgroundColor = "var(--cor-bg-tm-preto)"
    document.body.style.color = "var(--cor-txt-tm-preto)"
    sidebar.style.backgroundColor = "var(--cor-bg-sidebar-tm-preto)"
    aria_projeto.forEach((el)=>{
        el.style.backgroundColor = "var(--cor-bg-ariaProjeto-preto)"
    })
    name_pj.forEach((el)=>{
        el.style.color = "#eed33b"
    })
    aria_projetoA.forEach((el)=>{
        el.style.color = "#eed33b"
    })
    lua.style.display = "block"
    sol.style.display = 'none'
})



