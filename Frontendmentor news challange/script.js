const menuopen = document.getElementById("menu-icon");
const menuclose = document.getElementById("close-menu");
const menu = document.getElementById("menu");
const shadow = document.getElementById("shadow");

function showmenu(){
    menu.style.display = "block";
    shadow.style.display = "block";
    menuopen.style.display = "none";
}

function hidemenu(){
    menu.style.display = "none";
    menuopen.style.display = "block";
    shadow.style.display = "none";
}

menuopen.addEventListener("click", showmenu);

menuclose.addEventListener("click", hidemenu);