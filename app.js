//STATE VARS
var pkg = {
    page:0,
    fruit:"",
    cut:"",
    tutorial:""
}

var savedPkg = localStorage.getItem("pkg");

if(savedPkg){
    pkg = JSON.parse(savedPkg);
}

var cutOneIcon = document.querySelector("#cutOneIcon"),
    cutTwoIcon = document.querySelector("#cutTwoIcon"),
    cutOneText = document.querySelector("#cutOneText"),
    cutTwoText = document.querySelector("#cutTwoText");

var OverviewText = document.querySelector("#OverviewText"),
    OverviewIcon = document.querySelector("#OverviewIcon");

//PROXY SETUP
var handler = {
    set:function(obj, props, value){
        
    }
}

var prox = new Proxy(pkg, handler);

//CHANGE STATE FUNC
function ChangeFruit(text){
    pkg.fruit = text;
    pkg.page = 2;
    localStorage.setItem("pkg", JSON.stringify(pkg));
    //something.style.left = "-100vw";
   // setTimeout(function(){
        location.href="../cutsPage/cut_page.html";
   // },2000)
}

function ChangeCut(text){
    pkg.cut = text;
    pkg.page = 3;
    localStorage.setItem("pkg", JSON.stringify(pkg));
    //something.style.left = "-100vw";
   // setTimeout(function(){
        location.href="../tutorial overview page/overviewpage.html";
   // },2000)
}

//CHANGE UI
if(pkg.page == 2){
    if(pkg.fruit == "Mango"){
        cutOneIcon.src = "../svgs/cuts_page/Mango_slice.svg";
        cutTwoIcon.src = "../svgs/cuts_page/Mango_cube.svg";
        
        cutOneText.innerText = "Slice";
        cutTwoText.innerText = "Cube";
    }
    
    else if(pkg.fruit == "Avocado"){
        cutOneIcon.src = "../svgs/avoIcon.svg";
        cutTwoIcon.src = "../svgs/avoIcon.svg";
        
        cutOneText.innerText = "Slice";
        cutTwoText.innerText = "Cube";
    }
    
      else if(pkg.fruit == "Pomegranate"){
        cutOneIcon.src = "../svgs/pomeIcon.svg";
        cutTwoIcon.src = "../svgs/pomeIcon.svg";
        
        cutOneText.innerText = "Slice";
        cutTwoText.innerText = "Cube";
    }
    
     else if(pkg.fruit == "Pineapple"){
        cutOneIcon.src = "../svgs/pineIcon.svg";
        cutTwoIcon.src = "../svgs/pineIcon.svg";
        
        cutOneText.innerText = "Slice";
        cutTwoText.innerText = "Cube";
    }
    
      else if(pkg.fruit == "Watermelon"){
        cutOneIcon.src = "../svgs/waterIcon.svg";
        cutTwoIcon.src = "../svgs/waterIcon.svg";
        
        cutOneText.innerText = "Slice";
        cutTwoText.innerText = "Cube";
    }
    
    else if(pkg.fruit == "Kiwi"){
        cutOneIcon.src = "../svgs/kiwiIcon.svg";
        cutTwoIcon.src = "../svgs/kiwiIcon.svg";
        
        cutOneText.innerText = "Slice";
        cutTwoText.innerText = "Cube";
    }
}

if(pkg.page == 3){
    if(pkg.fruit == "Mango" && pkg.cut == "CutOne"){
        OverviewText.innerText = pkg.fruit + " Slices";
        OverviewIcon.src = "../svgs/cuts_page/Mango_slice.svg";
    }
    if(pkg.fruit == "Mango" && pkg.cut == "CutTwo"){
        OverviewText.innerText = pkg.fruit + " Cubes";
        OverviewIcon.src = "../svgs/cuts_page/Mango_cube.svg";
    }
}