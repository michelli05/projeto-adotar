let menuResponsivo = document.getElementById("menu-responsivo");
let menu = document.getElementById("botao-menu");

function abrirMenu(){
    if(menuResponsivo.style.display="none"){
        menuResponsivo.style.display="flex";
    }
}

menu.onclick = abrirMenu;