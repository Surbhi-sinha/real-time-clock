function addleading_zero(number){
    if(number<10){
        return "0"+number.toString();
    }
    else{
        return number.toString();
    }
}
window.setInterval(function(){

    let current_time = new Date();
    let  hours = current_time.getHours();
    let  minutes = current_time.getMinutes();
    let  seconds = current_time.getSeconds();
    
    document.getElementById("hours").innerHTML = addleading_zero(hours);
    document.getElementById("minutes").innerHTML = addleading_zero(minutes);
    document.getElementById("seconds").innerHTML = addleading_zero(seconds);
},1000);
document.getElementById("hello").innerHTML = "change kr dia na?";