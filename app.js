var pkg = {
    page:0,
    fruit:""
}

var savedPkg = localStorage.getItem("pkg");

if(savedPkg){
    pkg = JSON.parse(savedPkg);
}

var handler = {
    set:function(obj, props, value){
        
    }
}

var prox = new Proxy(pkg, handler);

function ChangeFruit(text){
    pkg.fruit = text;
    pkg.page = 2;
    localStorage.setItem("pkg", JSON.stringify(pkg));
    something.style.left = "-100vw";
    setTimeout(function(){
        
        location.href="fruits.html";
    },2000)
}

if(pkg.page == 2){
    if(pkg.fruits == "avocado"){
        img.src= "avacodo.svg"
    }
}