
window.onload = function() {
  let counter = 0;
  let timeLeft = 3;
  let timeUp = 0;
  var intervalId;
  var clockRunning = false;



function timeIt(){
    clockRunning = true;
    counter++;
    document.getElementById("timer_html").innerHTML = (timeLeft-counter);
    if(timeLeft===timeUp){
        stop();
    }
}

this.setInterval(timeIt, 1000);


function stop() {
    clearInterval(counter);
      };



};




























/*
window.onload = function() {
    $("#stop").on("click", stopwatch.stop);
    $("#reset").on("click", stopwatch.reset);
    $("timer_html").onload(stopwatch.start);
  };
  
// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer_html").innerHTML = seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer_html").innerHTML = "timer_html";
  }
}, 1000);

setTimeout(timeUp, 1000 * 1);

function timeUp() {
    $("#timer_html").prepend("<h2>Time's Up!</h2>");
   
  }

*/
















