// document.getElementById("showtimebutton").onmouseover = function(){
//     // document.getElementById("showtimebutton").style.backgroundColor = "blue";
//     console.log("kya hai bc");
// }

document.getElementById("showtimebutton").onmouseover = function() {
    document.getElementById("showtimebutton").style.backgroundColor = "blue";
    document.getElementById("showtimebutton").style.color = "white";
    document.getElementById("showtimebutton").onmouseout = function(){
        document.getElementById("showtimebutton").style.backgroundColor = "#00c5ff";
    }
};
document.getElementById("stopwatchbutton").onmouseover = function() {
    document.getElementById("stopwatchbutton").style.backgroundColor = "blue";
    document.getElementById("stopwatchbutton").style.color = "white";
    document.getElementById("stopwatchbutton").onmouseout = function(){
        document.getElementById("stopwatchbutton").style.backgroundColor = "#00c5ff";
    }
}; 
document.getElementById("timerbutton").onmouseover = function() {
    document.getElementById("timerbutton").style.backgroundColor = "blue";
    document.getElementById("timerbutton").style.color = "white";
    document.getElementById("timerbutton").onmouseout = function(){
        document.getElementById("timerbutton").style.backgroundColor = "#00c5ff";
    }
}; 