var hours = 0;
var minutes = 0;
var seconds = 0;
var interval = null;
function add_leading_zero(number){
    if(number<10){
        return "0"+number.toString();
    }else{
        return number.toString();
    }
}
document.getElementById('hourstime').addEventListener('change', e => {
	hours = +e.target.value;
});

document.getElementById('minutestime').addEventListener('change', e => {
	minutes = +e.target.value;
});

document.getElementById('secondstime').addEventListener('change', e => {
	seconds = +e.target.value;
});

document.getElementById('startButton').addEventListener('click', () => {
	var timeInSeconds = (hours * 60 * 60) +(minutes * 60) +seconds;

  var displayTime = () => {
  	var displayHours = Math.floor(timeInSeconds / (60 * 60));
    var remainder = timeInSeconds - (displayHours * 60 * 60);
    var displayMinutes = Math.floor(remainder / 60);
    var displaySeconds = remainder - (displayMinutes * 60);
    document.getElementById("timerclock").innerHTML = add_leading_zero(displayHours) + " : " +
    add_leading_zero(displayMinutes) + " : " + add_leading_zero(displaySeconds);
  };
	interval = setInterval(() => {
  	displayTime();
  	timeInSeconds -= 1;
    if (timeInSeconds < 0) {
        alert("set time is over!");
    	clearInterval(interval);
        document.getElementById("timerclock").innerHTML ="00 : 00 : 00";
    }
  }, 1000);
});