
				var timeleft = 12;

				var startTime = 0;
				var currentTime = 0;

				function setup() {
				  noCanvas();
				  startTime = millis();

				function convertSeconds(s) {
				  var min = floor(s / 60);
				  var sec = s % 60;
				  return nf(min, 2) + ':' + nf(sec, 2);
				}

				var params = getURLParams();
				  if (params.minute) {
					var min = params.minute;
					timeleft = min * 60;
				  }
				  
				var timer = select('#timer');
				  timer.html(convertSeconds(timeleft - currentTime));				  

				  var interval = setInterval(timeIt, 1000);

				  function timeIt() {
					currentTime = floor((millis() - startTime) / 1000);
					timer.html(convertSeconds(timeleft - currentTime));
					if (currentTime == timeleft) {
					  clearInterval(interval);
					  alert('Time out');
						submitAnswers();
					}
				  }

				};


				function submitAnswers(){
	var total = 5;
	var score = 0;
	
	// Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	
	// Validation
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert('You missed question '+ i);
			return false;
		}
	}
	
	// Set Correct Answers
	var answers = ["a","c","b","d","c"];
	
	// Check Answers
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == answers[i - 1]){
			score++;
		}
	}
	
	// Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	alert('You scored '+score+' out of ' +total);
	
	return false;
}
				