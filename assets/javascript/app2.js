
// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads
window.onload = function() {
    var questionsCorrect = 0;
    var time = 10;
    var intervalId;
    var questionCount = 1;
    

    var questions = {
        question1: ["Rap was just becoming well known in the 90s. Which artist had the first number one rap single?"],
        question2: ["This fad of the '90s was like a purse carried on your waist."],
        question3: ["1991: The second biggest single of the 1990s, Bryan Adams '(Everything I Do)' I Do It For You' was the theme song for which 1991 film?"],
        question4: ["What team won the 1994 World Series?"],
        question5: ["Which famous girl group of the 90s sung the theme song to the hit sketch comedy TV show 'All That'?"]
    };

    var answers = {
        answer1: ["Vanilla Ice","DMX","Run DMC","Tupac"],
        answer2: ["Waist Pack","Hip Pack","Fanny Packs","Fanny Pocket"],
        answer3: ["Titanic","Robin Hood: Prince of Thieves","Born on the Fourth of July","Postman"],
        answer4: ["Red Socks","Yankees","Cardinals","TThere was no winner"],
        answer5: ["Destiny's Child","Xscape","TLC","Salt'N'Pepa"]
    };


//========================================Functions Start==============================================================//
function playGame (){
    $("#startButton").on("click", function(){
        $("#startButton").hide();
        start();
        showQuestion(questionCount);
    }); 
}

function start() {
     
   intervalId = setInterval(counter, 1000);
 }

function counter() {
    time--;
   $("#timer").text(time);
   console.log(time);
    if(time===0){
        stop();
        $('.answerButton').remove();
        $('.tempQuestionDiv').remove();
        questionCount++;
        showQuestion(questionCount);
        reset();
    } if(questionCount>5){
        stop();
        $("#startButton").show();
        $('#timer').remove()
        
    }

 }

 function stop() {
    console.log("stopping");
    clearInterval(intervalId);
 
 }

 function reset() {
    time=10;
    start();
 
 }
 

function showQuestion(questionCount){
    switch(questionCount){
        case 1:
            $('#questionContainer').append("<h1 class='tempQuestionDiv'>"+ questions.question1+ "</h1>");
            //Show Answers
            $('#answerContainer').append("<button class='answerButton' 'value=1'>" + answers.answer1[0]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer1[1]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer1[2]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer1[3]+"</button>");
            checkAnswer();
            
            
            
        break;
    
        case 2:
            $('#questionContainer').append("<h1 class='tempQuestionDiv'>"+ questions.question2[0]+ "</h1>");
        //Show Answers
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer2[0]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer2[1]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=1>" + answers.answer2[2]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer2[3]+"</button>");
            checkAnswer();
            
        break;

        case 3:
            $('#questionContainer').append("<h1 class='tempQuestionDiv'>"+ questions.question3[0]+ "</h1>");
        //Show Answers
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer3[0]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=1>" + answers.answer3[1]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer3[2]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer3[3]+"</button>");
            checkAnswer();
            
        break;

        case 4:
            $('#questionContainer').append("<h1 class='tempQuestionDiv'>"+ questions.question4[0]+ "</h1>");
        //Show Answers
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer4[0]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer4[1]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer4[2]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=1>" + answers.answer4[3]+"</button>");
            checkAnswer();
            
        break;

        case 5:
            $('#questionContainer').append("<h1 class='tempQuestionDiv'>"+ questions.question5[0]+ "</h1>");
        //Show Answers
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer5[0]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer5[1]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=1>" + answers.answer5[2]+"</button>");
            $('#answerContainer').append("<button class='answerButton' value=0>" + answers.answer5[3]+"</button>");
            checkAnswer();
            
        break;
    
        default:
            console.log('No more questions');
            stop();
    };
};

function checkAnswer(){
    $('.answerButton').on('click', function(){
        var correctChoice = $(this).attr("value");
        console.log("the correct choice is"+correctChoice);
        clearInterval(intervalId);
        

        if(correctChoice==='1'){
            console.log("Correct");
            $('.answerButton').remove();
            $('.tempQuestionDiv').remove();
            questionsCorrect++;
            $('#correctContainer2').remove();
            $('#correctSpan').append("<span id='correctContainer2'>" + questionsCorrect+"</span>");
                     
        }else{
            console.log("incorrect");
            $('.answerButton').remove();
            $('.tempQuestionDiv').remove();            
        }
        
        questionCount++;
        showQuestion(questionCount);
        reset()
    });
}




playGame();


  };
