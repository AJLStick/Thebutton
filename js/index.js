//initial number of cookies    
var num = 0;

window.onload = function () {
        var name = prompt("Name?");
        
        var space = document.getElementById("space");
        
        space.innerHTML = name + "";
}

var cookie = document.getElementById("stick");

function cookieClick() { 
    num += 1;

    var numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num;      
    //automatic Granny upgrade to 2x
    if(num >= 30 ){
        num += 2;
        upgradeLevel.innerHTML = "Stick Picker Level";
    }

    //automatic factory upgrade to 10x
    if(num >= 500) {
        num += 10;
        upgradeLevel.innerHTML = "Chainsaw Level";
    }

    //automatic plant upgrade to 30x
    if(num >= 1000) {
        num += 30;
        upgradeLevel.innerHTML = "Dual Axes Level";
    }

    //automatic super factory upgrade to 1000x
    if(num >= 100000) {
        num += 1000;
        upgradeLevel.innerHTML = "One Fell Swoop Level";
    }
}
