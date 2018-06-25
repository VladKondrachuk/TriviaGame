
//Set up time variable
let time =15;
//Set up quesions as object
let questions = {
            quesion1:["question1"],
            quesion2:["question2"],
};
//Set up answers as object
let answers = {
            answer1:[{1:"Earth",
                      2:"Earth",
                      3:"Earth",
                      4:"Earth",
          }],

            answer2:[{1:"Earth",
                      2:"Earth",
                      3:"Earth",
                      4:"Earth",
          }]
};
//Set up quesion count
let questionCount = 0;
//Set up correct answers count
let correctAnswers;
//Set up wrong answers count
let wrongAnswers;
//Set up wrong answers count
let intervalID;
//Declare the startGame function without a variable
function startGame(){

}
//Declare the gamePlay function without a variable
function gamePlay (){
    $(".startButton").on('click', function(){
    $(".startButton").hide();
    timeCount();
    firstQuestion();
    answerCheck();

    });

};
//Declare the timeCount function without a variable
function timeCount(){
    time =15;
    interval = setInterval(timer,1000);
    $(".questionContainer").append("<div class='remainingTime'>" + "Time Remaining" + "<span class='timer'" +"</span>" + "</div>");
}
//Declare the timer function which counts the time down and if time ===0 clear the Interval and display the correct answers
function timer(){
    time--;
    $(".timer").text(time);
      if(time===0){
          clearInterval(interval);
          $("button").remove();
          displayAnswer();
      }
};
//Declare the displayAnswer function 
function displayAnswer(){
  if(questionAsked === 1){
    alert('Correct');
  }else{
    alert('Incorrect');
  };

};

function firstQuestion(){
  questionCount++;
  $(".questionContainer").append("<button class='answerButton' value=0>" + answers.answer1[0][1] + '</button>');
  $(".questionContainer").append("<button class='answerButton' value=0>" + answers.answer1[0][2] + '</button>');
  $(".questionContainer").append("<button class='answerButton' value=0>" + answers.answer1[0][3] + '</button>');
  $(".questionContainer").append("<button class='answerButton' value=0>" + answers.answer1[0][4] + '</button>');

}







































