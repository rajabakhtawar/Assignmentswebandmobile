function removeRow(){
    document.getElementById('table').deleteRow(0);
}


function newPic(){
    var img = document.getElementById('image');
    img.src = "images/mouseover.jpg"
}
function oldPic(){
    var img = document.getElementById('image');
    img.src = "images/mouseout.jpg";
}


var increase = document.getElementById('increase');
var decrease = document.getElementById('decrease');
var screen = document.getElementById('screen');
function increaseCounter(){
    screen.value = parseInt(screen.value)+1;
}
function decreaseCounter(){
    screen.value = parseInt(screen.value)-1;
}
