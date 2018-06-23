




window.onload = function() {
    let intervalId;
    let clockRunning = false;
    let time = 3;


  
  function start() {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
}

function reset() {
        time = 30;
        $("#timer_html").text("00:00");
 }
 
 function stop() {
        clearInterval(intervalId);
 }

 function count() {
        time--;
        let converted = timeConverter(time);
        $("#timer_html").text(converted);

 }

 function timeConverter(t) {
   let minutes = Math.floor(t / 60);
   let seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes === 0) {
            minutes = "00";
            }
            else if (minutes < 10) {
                minutes = "0" + minutes;
            }
            return minutes + ":" + seconds;

        }


 

 


 while (time>0) {
    start();
    
}












            
        };


     













