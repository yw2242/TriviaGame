$(document).ready(function() {

    // create question list (5 questions)
    var question = [
        { q: "Death Valley is located in what U.S. state?",
            a: "California",
            b: "Utah",
            c: "Colorado",
            d: "Nevada"
        },
        { q: "What is the capital of Texas State?",
            a: "Austin",
            b: "Houston",
            c: "Palo Alto",
            d: "Dallas"
        },
        { q: "Which state is not sales tax free?",
            a: "Alaska",
            b: "Montana",
            c: "South Dakota",
            d: "New Hampshire"
        },
        { q: "Which state is not geographically connected to Nebreska State?",
            a: "Wyoming",
            b: "Iowa",
            c: "Colorado",
            d: "Missouri"
        },
        { q: "What is Idaho best known for?",
            a: "Avocado",
            b: "Marijuana",
            c: "National Park",
            d: "Potato"
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

    var lastQ = question.length - 1
    var runningQuestion = 0;
  
    

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


    
    function runQuestion() {

        var q = question[runningQuestion];

        question.innerHTML = "<p>"+ q.question +"</p>";
        a.innerHTML = q.a;
        b.innerHTML = q.b;
        c.innerHTML = q.c;
        d.innerHTML = q.d;

}
    // for loop for the five questions



    // show result (right & wrong)

      totalScore.textContent = score;


});