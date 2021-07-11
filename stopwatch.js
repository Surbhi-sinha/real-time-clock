var isRunning = false,
startTime,
elapsedTime=0,
clockInterval,
hours,
minutes,
seconds,
remainder,
formattedTime;
//stopwatch
//start-stop
//reset
function add_leading_zero(number){
    if(number<10){
        return "0"+number.toString();
    }else{
        return number.toString();
    }
}
document.getElementById("start-stop").onclick = function(){
    if(!isRunning){
        isRunning=true;
        if(elapsedTime==0){
            startTime=new Date().getTime();
        }else{
            startTime=new Date().getTime()-elapsedTime;
        }
        clockInterval = window.setInterval(function(){
            currentTime=new Date().getTime();
            elapsedTime = currentTime-startTime;
            //per hour 3600000
            //per minute 60000
            //per second = 1000
            
            hours = Math.floor(elapsedTime/3600000);
            remainder = elapsedTime - (hours*3600000);

            minutes = Math.floor(elapsedTime/60000);
            remainder -=  (minutes*60000);

            seconds = Math.floor(elapsedTime/1000);
            remainder -=  (seconds*1000);
            
            formattedTime = add_leading_zero(hours)+":"+ add_leading_zero(minutes)+":"+ add_leading_zero(seconds)+":"+ add_leading_zero(remainder);


            document.getElementById("stopwatch").innerHTML = formattedTime;
        },10);
    }else{
        window.clearInterval(clockInterval);
        isRunning=false;
    }
}
document.getElementById("reset").onclick = function(){
    startTime=new Date().getTime();
    if(!isRunning){
        elapsedTime=0;
        document.getElementById("stopwatch").innerHTML = "00:00:00:000";
    }
}