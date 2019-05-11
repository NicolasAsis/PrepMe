//STATE VARS
var pkg = {
    page:0,
    fruit:"",
    cut:"",
    tutorial:"",
    curStep:0
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
    OverviewIcon = document.querySelector("#OverviewIcon"),
    OverviewTools = document.querySelectorAll(".overviewTools");

var stepText = document.querySelector("#stepText"),
    titleText = document.querySelector("#titleText"),
    tutSvg = document.querySelector("#tutSvg"),
    descDiv = document.querySelector("#descDiv"),
    tutCircleDiv = document.querySelector("#tutCircleDiv");


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

   if(pkg.fruit == "Pomegranate"){
     ChangeCut("Pomegranate");
   }
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

function TutorialPage(){
    pkg.tutorial = pkg.fruit + " " + pkg.cut;
    pkg.page = 4;
    localStorage.setItem("pkg", JSON.stringify(pkg));
    //something.style.left = "-100vw";
   // setTimeout(function(){
        location.href="../tutorial page/tutorialPage.html";
   // },2000)
}

//CHANGE UI
if(pkg.page == 2){
    if(pkg.fruit == "Mango"){
        cutOneIcon.src = "../svgs/Mango/Mango_slice.svg";
        cutTwoIcon.src = "../svgs/Mango/Mango_cube.svg";

        cutOneText.innerText = "Slice";
        cutTwoText.innerText = "Cube";
    }

    else if(pkg.fruit == "Avocado"){
        cutOneIcon.src = "../svgs/Avocado/avacado_slices2.svg";
        cutTwoIcon.src = "../svgs/Avocado/avacado_cube2.svg";

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
        OverviewIcon.src = "../svgs/Mango/Mango_slice.svg";
    }
    if(pkg.fruit == "Mango" && pkg.cut == "CutTwo"){
        OverviewText.innerText = pkg.fruit + " Cubes";
        OverviewIcon.src = "../svgs/Mango/Mango_cube.svg";
    }
    if(pkg.fruit == "Avocado" && pkg.cut == "CutOne"){
        OverviewText.innerText = pkg.fruit + " Slices";
        OverviewIcon.src = "../svgs/Avocado/avocado_slice.svg";
    }
    if(pkg.fruit == "Avocado" && pkg.cut == "CutTwo"){
        OverviewText.innerText = pkg.fruit + " Cubes";
        OverviewIcon.src = "../svgs/Avocado/avocado_cubes.svg";
    }
    if(pkg.fruit == "Pomegranate"){
      OverviewText.innerText = pkg.fruit;
      OverviewIcon.src = "../svgs/Pomegranate/Pomegranate.svg";
    }
}

if(pkg.page == 4){
    if(pkg.tutorial == "Avocado CutOne"){
        console.log(data[pkg.fruit+"Slices"][0].step);
        stepText.innerText = data[pkg.fruit+"Slices"][pkg.curStep].step;
        titleText.innerText = data[pkg.fruit+"Slices"][pkg.curStep].title;
        descDiv.innerText = data[pkg.fruit+"Slices"][pkg.curStep].desc;
    }
}
