/* Timer for math exam*/

//duration, display

function startTimer() { 
	
	var duration = parseInt("${e://Field/timeleft-math}"); 	
	display = document.querySelector('#time');  
	
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
			$('NextButton').click();
            timeOver();    
        };
        //$('NextButton').onclick = function(event){
        //    clearInterval(myTimer);  
	    //    Qualtrics.SurveyEngine.setEmbeddedData('timeleft-math', duration);
        //};
		//$('PreviousButton').onclick = function(event){
        //    clearInterval(myTimer);  
	    //    Qualtrics.SurveyEngine.setEmbeddedData('timeleft-math', duration);
        }
        duration--;
    }, 1000); 
}
	
var timeOver = function() {  
    document.getElementById("timer_1").innerHTML = "";
    Qualtrics.SurveyEngine.setEmbeddedData('timeleft-math', -1)
}  	

