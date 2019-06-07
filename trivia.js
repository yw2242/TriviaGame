$(document).ready(function() {
    // create question list (5 questions)
    var questionList = [
        { question: "Death Valley is located in what U.S. state?",
            answer: {
                a: "1) California",
                b: "2) Utah",
                c: "3) Colorado",
                d: "4) Nevada"
            },
            correctAnswer: "a"
        },
        { question: "What is the capital of Texas State?",
            answer: {
                A: "1) Austin",
                B: "2) Houston",
                C: "3) Palo Alto",
                D: "4) Dallas"
            },
            correctAnswer: "a"
        },
        { question: "Which state is not sales tax free?",
            answer: {
                a: "1) Alaska",
                b: "2) Montana",
                c: "3) South Dakota",
                d: "4) New Hampshire"
            },
            correctAnswer: "c"
        },
        { question: "Which state is not geographically connected to Nebreska State?",
            answer: {
                a: "1) Wyoming",
                b: "2) Iowa",
                c: "3) Colorado",
                d: "4) Missouri"
            },
            correctAnswer: "d"
        },
        { question: "What is Idaho best known for?",
            answer: {
                a: "1) Avocado",
                b: "2) Marijuana",
                c: "3) National Park",
                d: "4) Potato"
            },
            correctAnswer: "d"
        }
      ];
    
    var index = 0;
    var score = 0;
    var totalScore = document.getElementById("score");
    var start = document.getElementById("start");
    var question = document.getElementById("question");
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var d = document.getElementById("d");
    var lastq = question.length - 1
    var runningquestion = 0;
  
    
    // create a timer (30 sec)
    var number = 30;
    var intervalId;
    // once 'start' is clicked, time for 30 sec
    $("#start").on("click", run);
    $("#next").on("click", run);
    // if clicked next before timeout, jump to the next question
    // if timeout, alert 'time's up' and jump to the next question
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $(number).css("color", "#fec16a");
        $("#start").css("display", "none");
        $("#question").text(questionList[index].question);
        $("#a").text(questionList[index].answer.a);
        $("#b").text(questionList[index].answer.b);
        $("#c").text(questionList[index].answer.c);
        $("#d").text(questionList[index].answer.d);
        $("#next").css("display", "block");

        console.log(questionList[index])
      }
    
    function decrement() {
        number--;
        // number.style.color = "#fec16a";
        $("#remaining").text("Time remaining: " + number + " sec");
        console.log(number);
        if (number === 0) {
            stop();
            alert("Time's Up!");
        }
    }


    function stop() {
        clearInterval(intervalId);
    }

    
    function runquestion() {
        var q = question[runningquestion];
        $("#question").innerHTML = "<p>"+ q.question +"</p>";
        $("#a").innerHTML = q.a;
        $("#b").innerHTML = q.b;
        $("#c").innerHTML = q.c;
        $("#d").innerHTML = q.d;
}
    // for loop for the five questions
    // show result (right & wrong)
      totalScore.textContent = score;
});