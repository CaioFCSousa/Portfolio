const idioma = navigator.language;
const idiomaPt = document.querySelector("#idioma_pt");
const idiomaEn = document.querySelector("#idioma_En");
if(idiomaPt !== "pt-BR"){
    idiomaPt.style.color = "#d9b871";
}else{
    idiomaEn.style.color = "#d9b871";
}

