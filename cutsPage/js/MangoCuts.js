var tutNum = "";

//To go to overview page
function oPageBut(num){
    location.href="../tutorial overview page/overviewpage.html";
    
    tutNum = num;
}

//To go to tutorial page
var MangoBut1 = document.querySelector("#MangoBut1"),
    MangoBut2 = document.querySelector("#MangoBut2"),
    Page = document.querySelector(".pageS"),
    MangoAlert = document.querySelector(".MangoAlert");

function startBut(){
    if (MangoBut1.checked == true && MangoBut2.checked == true){
        location.href="../tutorial page/tutorialPage.html";
    }
    else {
        Page.classList.add("BlurPage");
        MangoAlert.style.display = "block";
    }
}

MangoAlert.addEventListener("click", function(){
    MangoAlert.style.display = "none";
    Page.classList.remove("BlurPage");
});

function prevPage(){
   window.history.back(); 
}