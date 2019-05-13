function prevPage(){
   window.history.back(); 
}



// Hamberger Menu Animation

var Knife1 = document.querySelector("#knife1");
var Knife2 = document.querySelector("#knife2");
var Knife3 = document.querySelector("#knife3");

function hamBut() {
    var menu = document.querySelector('.menuBG');
    var closeBut = document.querySelector('.close');
    var hambut = document.querySelector('.hambut');
    var menuBG = document.querySelector('.menuBG');
    
    Knife1.classList.toggle('knifemove1');
    Knife2.classList.toggle('knifemove2');
    Knife3.classList.toggle('knifemove3');
    
    menu.classList.toggle('move');
}


function dropbox() {
    
    var dropboxmenu = document.querySelector('.dropbox');
    dropboxmenu.classList.toggle('dropboxShow');
}

// Alert Box

var closebut = document.querySelector('.closebut');

closebut.addEventListener("click", function(){
    MangoAlert.style.display = "none";
//    Page.classList.remove("BlurPage");
});

//Finish Tutorial Button

function finishTut(){
    location.href="../Categories/categories.html";
}