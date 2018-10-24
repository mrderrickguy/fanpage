$(document).ready(function(){
	document.getElementById("raplink").onmouseover = function() {mouseOver()};
document.getElementById("raplink").onmouseout = function() {mouseOut()};


function mouseOver() {
    document.getElementById("raplink").style.color = "yellow";
}
function mouseOut() {
    document.getElementById("raplink").style.color = "white"; 
}
// function mouseOut() {
//     document.getElementById("raplink").style.color = "black";
// }
});


$(document).ready(function(){
document.getElementById("zillalink").onmouseout = function() {mouseOut()};
document.getElementById("zillalink").onmouseover = function() {mouseOver()};

function mouseOver() {
    document.getElementById("zillalink").style.color = "black";
}

function mouseOut() {
    document.getElementById("zillalink").style.color = "blue";
}
});