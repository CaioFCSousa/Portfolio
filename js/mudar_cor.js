const lua = document.querySelector('.temas .lua')
const sol = document.querySelector('.temas .sol')

document.addEventListener("click",(evt)=>{
    console.log(evt.target.className )
    if(evt.target.className == "fa-solid fa-moon lua"){
        lua.style.display = "none"
        sol.style.display = "block"  
        setCorB()
    }else if(evt.target.className == "fa-solid fa-sun sol"){
        lua.style.display = "block"
        sol.style.display = "none"
        setCorP()
    }
})
function setCorB(){
    document.body.style.backgroundColor ="#ffff"
}
function setCorP(){
    document.body.style.backgroundColor ="#080808"
}