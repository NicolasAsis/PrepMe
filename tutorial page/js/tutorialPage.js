var rightBut = document.querySelector("#rightBut"),
    leftBut = document.querySelector("#leftBut"),
    tutCircles = document.querySelectorAll(".tutCircles"),
    sText = document.querySelector("#stepText1");

var circNum = 0,
    stepNum = 1;

var animation1 = document.querySelector('#step1_animation'),
    animation2 = document.querySelector('#mSlices2');

var sText2 = document.querySelector("#stepText2"),
    tutTextDiv = document.querySelector("#tutTextDiv");

var fBut = document.querySelector(".finishBut");

function rButClick(){
    circNum = circNum + 1;
    stepNum = stepNum + 1;
    
    leftBut.style.display = "block";
    
    if (circNum > 2) {
        rightBut.style.display = "none";
    }
    
    tutCircles[circNum-1].style.backgroundColor = "#afafaf";
    tutCircles[circNum].style.backgroundColor = "#ef5b2e";
    
    sText.innerText = "Step " + stepNum;
    
    if (stepNum > 1) {
    animation1.style.display = "none";
    animation2.style.display = "block";
    animation2.src = "../Animations/Mango%20Slices/step" + stepNum + ".svg";
    }
    
    if (stepNum == 1){
        sText2.innerText = "Find the stem";
    }
    if (stepNum == 2){
        sText2.innerText = "Slice into the skin";
        tutTextDiv.innerText = "Slice into the skin, but not through it.";
    }
    if (stepNum == 3){
        sText2.innerText = "Flatten and cut";
        tutTextDiv.innerText = "Push mango onto cutting board, flatten it out, and then cut the slices right off the skin.";
    }
    if (stepNum == 4){
        sText2.innerText = "Put mango on plate";
        tutTextDiv.innerText = "After you cut the slices out of the mango, you can now place it onto the plate and enjoy.";
        fBut.style.display = "flex";
    }
}

function lButClick(){
    circNum = circNum - 1;
    stepNum = stepNum - 1;
    //console.log(stepNum);
    rightBut.style.display = "block";
    
    if (circNum < 1) {
        leftBut.style.display = "none";
    }
    
    tutCircles[circNum+1].style.backgroundColor = "#afafaf";
    tutCircles[circNum].style.backgroundColor = "#ef5b2e";
    
    sText.innerText = "Step " + stepNum;
    
    if (stepNum < 2) {
    animation1.style.display = "block";
    animation2.style.display = "none";
    }
    
    animation2.src = "../Animations/Mango%20Slices/step" + stepNum + ".svg";
    
    if (stepNum == 1){
        sText2.innerText = "Find the stem";
        tutTextDiv.innerText = "Face mango the thin side is facing you, and slice off the half an inch to one side of mango.";
    }
    if (stepNum == 2){
        sText2.innerText = "Slice into the skin";
        tutTextDiv.innerText = "Slice into the skin, but not through it.";
    }
    if (stepNum == 3){
        sText2.innerText = "Flatten and cut";
        tutTextDiv.innerText = "Push mango onto cutting board, flatten it out, and then cut the slices right off the skin.";
        fBut.style.display = "none";
    }
    if (stepNum == 4){
        sText2.innerText = "Put mango on plate";
        tutTextDiv.innerText = "After you cut the slices out of the mango, you can now place it onto the plate and enjoy.";
    }
}

function finishTut(){
    location.href="../Categories/categories.html";
}