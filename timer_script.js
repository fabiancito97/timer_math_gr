/* Timer for math exam*/

var function_timer = function startTimer(duration, display) {
    var timer = duration, minutes, seconds;  
    var myTimer = setInterval(function() {

        minutes = parseInt(timer / 60, 10)  
        seconds = parseInt(timer % 60, 10);  
        minutes = minutes < 10 ? "0" + minutes : minutes;  
        seconds = seconds < 10 ? "0" + seconds : seconds;  
        var text = ('innerText' in display)? 'innerText' : 'textContent';
        display[text] = minutes + ":" + seconds;  
        if (--timer < 0) {  
            clearInterval(myTimer);  
            timeOver();    
        };
        $('NextButton').onclick = function(event){
            clearInterval(myTimer);  
	        Qualtrics.SurveyEngine.setEmbeddedData('timeleft-math', duration);
        }
        duration--;
    }, 1000); 
}
	
var function_timeOver = function timeOver() {  
    document.getElementById("timer_1").innerHTML = "";
    $('NextButton').click();
    Qualtrics.SurveyEngine.setEmbeddedData('timeleft-math', -1)
}  	

