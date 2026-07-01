function quiz(){
    window.location.href = "start.html"
}

function start() {
    window.location.href = "quiz.html";
}

function check(event) {
    event.preventDefault();

    const playername = document.getElementById("name").value.trim();
    
    if (!playername) {
        alert("Kindly fill in both fields.");
        return;
    }

    localStorage.setItem("playername", playername)
    
    window.location.href = "instruction.html";
}


function exit(){
    
    window.location.href = "exit.html";
}


function quizresult(){

    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');
    let q6 = document.querySelector('input[name="q6"]:checked');
    let q7 = document.querySelector('input[name="q7"]:checked');
    let q8 = document.querySelector('input[name="q8"]:checked');
    let q9 = document.querySelector('input[name="q9"]:checked');
    let q10 = document.querySelector('input[name="q10"]:checked');


    if(q1 && q1.value == "3"){
        score = score + 10;
    }

     if(q2 && q2.value == "2"){
        score = score + 10;
    }

     if(q3 && q3.value == "1"){
        score = score + 10;
    }
    
    if(q4 && q4.value == "2"){
        score = score + 10;
    }
    
    if(q5 && q5.value == "1"){
        score = score + 10;
    }
    
    if(q6 && q6.value == "4"){
        score = score + 10;
    }
    
    if(q7 && q7.value == "4"){
        score = score + 10;
    }
    
    if(q8 && q8.value == "1"){
        score = score + 10;
    }
    
    if(q9 && q9.value == "4"){
        score = score + 10;
    }
    
    if(q10 && q10.value == "3"){
        score = score + 10;
    }

    localStorage.setItem("quizScore", score);
    window.location.href = "result.html";
}

function displayScore() {
    const score = localStorage.getItem("quizScore");
    const resultElement = document.getElementById("result");
    if (resultElement) {
        if (score !== null) {
            resultElement.textContent = "Your Score is : " + score;
        } else {
            resultElement.textContent = "No score available. Please take the quiz first.";
        }
    }
}


function retake(){
    // clear previous score and go back to instructions
    localStorage.removeItem("quizScore");
    window.location.href = "instruction.html";
}

// Ensure the result is displayed when the results page loads
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof displayScore === 'function') displayScore();
    });
}



