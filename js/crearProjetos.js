const projetos = document.querySelector(".projetos")


function criarProjeto(tecnologia, projectName, linkCode, linkSite, linkImg) {
    const icone = document.createElement("i");
    icone.setAttribute("class", "fa-brands fa-github");

    const pj = document.createElement("div");
    const ariaProjeto = document.createElement("div");
    const sobreProjeto = document.createElement("div");

    const linkCodigo = document.createElement("a");
    const linkSiteElement = document.createElement("a");

    const typePj = document.createElement("p");
    const namePj = document.createElement("p");

    typePj.setAttribute("class", "type_pj");
    namePj.setAttribute("class", 'name_pj');

    typePj.innerHTML = tecnologia;
    namePj.innerHTML = projectName;

    const imgPj = document.createElement("img");
    imgPj.setAttribute("src", linkImg);

    pj.setAttribute("class", "pj");
    ariaProjeto.setAttribute("class", "aria_projeto");
    sobreProjeto.setAttribute("class", "sobre_projeto");

    linkCodigo.setAttribute("class", "link_codigo");
    linkCodigo.setAttribute("href", linkCode);
    linkCodigo.setAttribute("target", '_blank');

    linkSiteElement.appendChild(imgPj);
    linkSiteElement.setAttribute("href", linkSite);
    linkSiteElement.setAttribute("target", '_blank');
    ariaProjeto.appendChild(sobreProjeto);
    sobreProjeto.appendChild(typePj);
    sobreProjeto.appendChild(namePj);
    ariaProjeto.appendChild(linkCodigo);
    linkCodigo.innerHTML = "codigo";
    linkCodigo.appendChild(icone);

    pj.appendChild(ariaProjeto);
    pj.appendChild(linkSiteElement);
    
    // Assuming "projetos" is an existing container element in your HTML
    projetos.appendChild(pj);
}
criarProjeto('Projeto JavaScript','Snake Game','https://github.com/CaioFCSousa/Snake_game','https://caiofcsousa.github.io/Snake_game/','img/prjeto_snekeGame.png')
criarProjeto('Projeto JavaScript','Calculadora IMC','https://github.com/CaioFCSousa/Calculadora_IMC','https://caiofcsousa.github.io/Calculadora_IMC/','img/Calculadora_IMC.png')

criarProjeto('Projeto JavaScript','To Do List','https://github.com/CaioFCSousa/To_do_list','https://caiofcsousa.github.io/To_do_list/','img/to_do_list.png')

criarProjeto('Projeto JavaScript','Pronturario','https://github.com/CaioFCSousa/Repositorio_ltd','https://github.com/CaioFCSousa/Repositorio_ltd','img/projeto_ltd.jpeg')
