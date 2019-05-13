//STATE VARS
var pkg = {
    page:0,
    fruit:"",
    cut:"",
    tutorial:"",
    curStep:0,
    cutType:""
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
    circleDiv = document.querySelector("#tutCircleDiv"),
    tutSvg = document.querySelector("#tutSvg");

var leftBut = document.querySelector("#leftBut"),
    rightBut = document.querySelector("#rightBut"),
    finishBut = document.querySelector(".finishBut");

var Page = document.querySelector(".pageS"),
    MangoAlert = document.querySelector(".MangoAlert");


//PROXY SETUP
var handler = {
    set:function(obj, props, value){
        if(props == "curStep"){
            ChangeTutorialUI(value, "add");
        }
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
//    pkg.tutorial = pkg.fruit + " " + pkg.cut;
//    pkg.page = 4;
//    localStorage.setItem("pkg", JSON.stringify(pkg));
//    //something.style.left = "-100vw";
//   // setTimeout(function(){
//        location.href="../tutorial page/tutorialPage.html";
//   // },2000)
    
      if (overviewBut1.checked == true && overviewBut2.checked == true){
        location.href="../tutorial page/tutorialPage.html"; 
         pkg.page = 4;
         localStorage.setItem("pkg", JSON.stringify(pkg));
    }
    else {
//        Page.classList.add("BlurPage");
        MangoAlert.style.display = "block";
    }
}

function NextStep(){
    pkg.curStep++;
    prox.curStep = pkg.curStep;
    console.log(pkg.curStep);
}

//function lastPage(){
//    pkg.page--;
//    window.history.back();
//}

function prevStep(){
    pkg.curStep--;
    ChangeTutorialUI(pkg.curStep, "subtract");
}

//CHANGE UI
if(pkg.page == 2){
    if(pkg.fruit == "Mango"){
        cutOneIcon.src = "../svgs/Mango/Mango_slice.svg";
        cutTwoIcon.src = "../svgs/Mango/Mango_cube.svg";

        cutOneText.innerText = "Slices";
        cutTwoText.innerText = "Cubes";
    }

    else if(pkg.fruit == "Avocado"){
        cutOneIcon.src = "../svgs/Avocado/avacado_slices2.svg";
        cutTwoIcon.src = "../svgs/Avocado/avacado_cube2.svg";

        cutOneText.innerText = "Slices";
        cutTwoText.innerText = "Cubes";
    }
     
    else if(pkg.fruit == "Pineapple"){
        cutOneIcon.src = "../svgs/Pineapple/pineappleRing.svg";
        cutTwoIcon.src = "../svgs/Pineapple/pineappleCube.svg";

        cutOneText.innerText = "Rings";
        cutTwoText.innerText = "Cubes";
    }

      else if(pkg.fruit == "Watermelon"){
        cutOneIcon.src = "../svgs/Watermelon/watermelonSlice.svg";
        cutTwoIcon.src = "../svgs/Watermelon/watermelonCube.svg";

        cutOneText.innerText = "Slices";
        cutTwoText.innerText = "Cubes";
    }

    else if(pkg.fruit == "Kiwi"){
        cutOneIcon.src = "../svgs/Kiwi/kiwi_wedge.svg";
        cutTwoIcon.src = "../svgs/Kiwi/kiwi_design.svg";

        cutOneText.innerText = "Wedges";
        cutTwoText.innerText = "Design Cut";
    }
}

if(pkg.page == 3){
    if(pkg.fruit == "Mango" && pkg.cut == "CutOne"){
        pkg.cutType = "Slices";
        OverviewText.innerText = pkg.fruit + " Slices";
        OverviewIcon.src = "../svgs/Mango/Mango_slice.svg";
    }
    if(pkg.fruit == "Mango" && pkg.cut == "CutTwo"){
        pkg.cutType = "Cubes";
        OverviewText.innerText = pkg.fruit + " Cubes";
        OverviewIcon.src = "../svgs/Mango/Mango_cube.svg";
    }
    if(pkg.fruit == "Avocado" && pkg.cut == "CutOne"){
        pkg.cutType = "Slices";
        OverviewText.innerText = pkg.fruit + " Slices";
        OverviewIcon.src = "../svgs/Avocado/avocado_slice.svg";
    }
    if(pkg.fruit == "Avocado" && pkg.cut == "CutTwo"){
        pkg.cutType = "Cubes";
        OverviewText.innerText = pkg.fruit + " Cubes";
        OverviewIcon.src = "../svgs/Avocado/avocado_cubes.svg";
    }
    if(pkg.fruit == "Pomegranate"){
        pkg.cutType="";
        OverviewText.innerText = pkg.fruit;
        OverviewIcon.src = "../svgs/Pomegranate/Pomegranate.svg";
    }
    if(pkg.fruit == "Pineapple" && pkg.cut == "CutOne"){
        pkg.cutType = "Rings";
        OverviewText.innerText = pkg.fruit + " Rings";
        OverviewIcon.src = "../svgs/Pineapple/sliceOverview.svg";
    }
     if(pkg.fruit == "Pineapple" && pkg.cut == "CutTwo"){
        pkg.cutType = "Cubes";
        OverviewText.innerText = pkg.fruit + " Cubes";
        OverviewIcon.src = "../svgs/Pineapple/cubeOverview.svg";
    }
      if(pkg.fruit == "Kiwi" && pkg.cut == "CutOne"){
        pkg.cutType = "Wedges";
        OverviewText.innerText = pkg.fruit + " Wedges";
        OverviewIcon.src = "../svgs/Kiwi/wedgeOverview.svg";
    }
     if(pkg.fruit == "Kiwi" && pkg.cut == "CutTwo"){
        pkg.cutType = "DesignCut";
        OverviewText.innerText = pkg.fruit + " Design Cut";
        OverviewIcon.src = "../svgs/Kiwi/designOverview.svg";
    }
      if(pkg.fruit == "Watermelon" && pkg.cut == "CutOne"){
        pkg.cutType = "Slices";
        OverviewText.innerText = pkg.fruit + " Slices";
        OverviewIcon.src = "../svgs/Watermelon/sliceOverview_water.svg";
    }
    if(pkg.fruit == "Watermelon" && pkg.cut == "CutTwo"){
        pkg.cutType = "Cubes";
        OverviewText.innerText = pkg.fruit + " Cubes";
        OverviewIcon.src = "../svgs/Watermelon/cubeOverview_water.svg";
    }
}

if(pkg.page == 4){
        console.log(data[pkg.fruit+pkg.cutType][pkg.curStep].step);
        stepText.innerText = data[pkg.fruit+pkg.cutType][pkg.curStep].step;
        titleText.innerText = data[pkg.fruit+pkg.cutType][pkg.curStep].title;
        tutSvg.src = data[pkg.fruit+pkg.cutType][pkg.curStep].animation;
        descDiv.innerText = data[pkg.fruit+pkg.cutType][pkg.curStep].desc;
        
        for(var i = 0; i<data[pkg.fruit+pkg.cutType].length-1; i++){
		circleDiv.innerHTML += "<div class='tutCircles'></div>";	
	   }
}

function ChangeTutorialUI(val, sign){
    var tutCircles = document.querySelectorAll(".tutCircles");
        //console.log(pkg.curStep);
        //console.log(data[pkg.fruit+pkg.cutType][val-1]);
        stepText.innerText = data[pkg.fruit+pkg.cutType][val].step;
        titleText.innerText = data[pkg.fruit+pkg.cutType][val].title;
        tutSvg.src = data[pkg.fruit+pkg.cutType][val].animation;
        descDiv.innerText = data[pkg.fruit+pkg.cutType][val].desc;
        
        if(sign == "add"){
        tutCircles[val-1].style.backgroundColor = "#afafaf";
        tutCircles[val].style.backgroundColor = "#ef5b2e";
        }
        else if(sign == "subtract"){
        tutCircles[val+1].style.backgroundColor = "#afafaf";
        tutCircles[val].style.backgroundColor = "#ef5b2e";
        }
        
        if(val == 0){
            leftBut.style.display = "none";
        }
        if(val > 0){
            leftBut.style.display = "block";
        }
        if(val < data[pkg.fruit+pkg.cutType].length-1){
            rightBut.style.display = "block";
            finishBut.style.display = "none";
        }
        if(val == data[pkg.fruit+pkg.cutType].length-1){
            rightBut.style.display = "none";
            finishBut.style.display = "block";
        }
}
