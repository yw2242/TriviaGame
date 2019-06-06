$(document).ready(function() {

    // create question list (5 questions)

    var question = [
        { question: "Death Valley is located in what U.S. state?",
            answer: {
                a: "California",
                b: "Utah",
                c: "Colorado",
                d: "Nevada"
            },
            correctAnswer: "a"
        },
        { question: "What is the capital of Texas State?",
            answer: {
                A: "Austin",
                B: "Houston",
                C: "Palo Alto",
                D: "Dallas"
            },
            correctAnswer: "a"
        },
        { question: "Which state is not sales tax free?",
            answer: {
                a: "Alaska",
                b: "Montana",
                c: "South Dakota",
                d: "New Hampshire"
            },
            correctAnswer: "c"
        },
        { question: "Which state is not geographically connected to Nebreska State?",
            answer: {
                a: "Wyoming",
                b: "Iowa",
                c: "Colorado",
                d: "Missouri"
            },
            correctAnswer: "d"
        },
        { question: "What is Idaho best known for?",
            answer: {
                a: "Avocado",
                b: "Marijuana",
                c: "National Park",
                d: "Potato"
            },
            correctAnswer: "d"
        }


      ];
    

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
        $("#start").css("display", "none");
        $("question").text(question);
      }
    

    function decrement() {
        number--;
        // number.style.color = "#fec16a";
        $("#remaining").text("Time remaining: " + number + " sec");
        console.log(number);
        if (number === 0) {
            alert("Time's Up!");
        }
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