function prevPage(){
   window.history.back(); 
}



// Hamberger Menu Animation

var Knife1 = document.querySelector("#knife1");
var Knife2 = document.querySelector("#knife2");
var Knife3 = document.querySelector("#knife3");



function OpenMenu (){
    var menu = document.querySelector("#menu");
    var menubg = document.querySelector("#bg");
    
    menu.style.marginRight = "0px";
    
    Knife1.style.transform = "rotate(30deg) translate(-0px, 10px)";
    Knife3.style.transform = " rotate(-30deg) translate(0px, -10px)";
    Knife2.style.display = "none";
    menubg.style.visibility = "visible";
    
    knife1.src="../svgs/knife01_white.svg";
    knife3.src="../svgs/knife03_white.svg";
    
}

function closeMenu () {
    var menu = document.querySelector("#menu");
    var menubg = document.querySelector("#bg");
    
    menu.style.marginRight = "-220px";
     Knife1.style.transform = "rotate(0deg) translate(0px, 0px)";
    Knife3.style.transform = " rotate(0deg) translate(0px, 0px)";
    Knife2.style.display = "block";
    
    knife1.src="../svgs/knife01.svg";
    knife3.src="../svgs/knife03.svg";
    
    menubg.style.visibility = "hidden";
}