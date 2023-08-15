//Global Variables
//Variables to track each possible quiz outcome.
var questionCount = 0;
var ftbScore = 0;
var nalScore = 0;
var rgpScore = 0;
var melScore = 0;
var lrhScore = 0;

//Variables for each quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q5a5 = document.getElementById("q5a5");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");
var q6a5 = document.getElementById("q6a5");

var result = document.getElementById("result");
var restart = document.getElementById("restart");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", ftb);
q1a2.addEventListener("click", nal);
q1a3.addEventListener("click", rgp);
q1a4.addEventListener("click", mel);
q1a5.addEventListener("click", lrh);
q1a1.addEventListener("click", disableBtn1);
q1a2.addEventListener("click", disableBtn1);
q1a3.addEventListener("click", disableBtn1);
q1a4.addEventListener("click", disableBtn1);
q1a5.addEventListener("click", disableBtn1);

q2a1.addEventListener("click", ftb);
q2a2.addEventListener("click", nal);
q2a3.addEventListener("click", rgp);
q2a4.addEventListener("click", mel);
q2a5.addEventListener("click", lrh);
q2a1.addEventListener("click", disableBtn2);
q2a2.addEventListener("click", disableBtn2);
q2a3.addEventListener("click", disableBtn2);
q2a4.addEventListener("click", disableBtn2);
q2a5.addEventListener("click", disableBtn2);

q3a1.addEventListener("click", ftb);
q3a2.addEventListener("click", nal);
q3a3.addEventListener("click", rgp);
q3a4.addEventListener("click", mel);
q3a5.addEventListener("click", lrh);
q3a1.addEventListener("click", disableBtn3);
q3a2.addEventListener("click", disableBtn3);
q3a3.addEventListener("click", disableBtn3);
q3a4.addEventListener("click", disableBtn3);
q3a5.addEventListener("click", disableBtn3);

q4a1.addEventListener("click", ftb);
q4a2.addEventListener("click", nal);
q4a3.addEventListener("click", rgp);
q4a4.addEventListener("click", mel);
q4a5.addEventListener("click", lrh);
q4a1.addEventListener("click", disableBtn4);
q4a2.addEventListener("click", disableBtn4);
q4a3.addEventListener("click", disableBtn4);
q4a4.addEventListener("click", disableBtn4);
q4a5.addEventListener("click", disableBtn4);

q5a1.addEventListener("click", ftb);
q5a2.addEventListener("click", nal);
q5a3.addEventListener("click", rgp);
q5a4.addEventListener("click", mel);
q5a5.addEventListener("click", lrh);
q5a1.addEventListener("click", disableBtn5);
q5a2.addEventListener("click", disableBtn5);
q5a3.addEventListener("click", disableBtn5);
q5a4.addEventListener("click", disableBtn5);
q5a5.addEventListener("click", disableBtn5);

q6a1.addEventListener("click", ftb);
q6a2.addEventListener("click", nal);
q6a3.addEventListener("click", rgp);
q6a4.addEventListener("click", mel);
q6a5.addEventListener("click", lrh);
q6a1.addEventListener("click", disableBtn6);
q6a2.addEventListener("click", disableBtn6);
q6a3.addEventListener("click", disableBtn6);
q6a4.addEventListener("click", disableBtn6);
q6a5.addEventListener("click", disableBtn6);

restart.addEventListener("click", refresh);

//#TODO: Define quiz functions here
function disableBtn1() {
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
    document.getElementById("q1a3").disabled = true;
    document.getElementById("q1a4").disabled = true;
    document.getElementById("q1a5").disabled = true;
}
function disableBtn2() {
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
    document.getElementById("q2a3").disabled = true;
    document.getElementById("q2a4").disabled = true;
    document.getElementById("q2a5").disabled = true;
}
function disableBtn3() {
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
    document.getElementById("q3a3").disabled = true;
    document.getElementById("q3a4").disabled = true;
    document.getElementById("q3a5").disabled = true;
}
function disableBtn4() {
    document.getElementById("q4a1").disabled = true;
    document.getElementById("q4a2").disabled = true;
    document.getElementById("q4a3").disabled = true;
    document.getElementById("q4a4").disabled = true;
    document.getElementById("q4a5").disabled = true;
}
function disableBtn5() {
    document.getElementById("q5a1").disabled = true;
    document.getElementById("q5a2").disabled = true;
    document.getElementById("q5a3").disabled = true;
    document.getElementById("q5a4").disabled = true;
    document.getElementById("q5a5").disabled = true;
}
function disableBtn6() {
    document.getElementById("q6a1").disabled = true;
    document.getElementById("q6a2").disabled = true;
    document.getElementById("q6a3").disabled = true;
    document.getElementById("q6a4").disabled = true;
    document.getElementById("q6a5").disabled = true;
}

function ftb() {
  ftbScore += 1;
  questionCount += 1;
  //alert("One point to bad guy!");
  if (questionCount >=6){
    updateResult();
  }
}

function nal() {
  nalScore += 1;
  questionCount += 1;
  //alert("One point to when the party's over!");
  if (questionCount >=6){
    updateResult();
  }
}

function rgp() {
  rgpScore += 1;
  questionCount += 1;
  //alert("One point to lovely");
  if (questionCount >=6){
    updateResult();
  }
}

function mel() {
  melScore += 1;
  questionCount += 1;
  //alert("One point to bellyache!");
  if (questionCount >=6){
    updateResult();
  }
}

function lrh() {
    lrhScore += 1;
    questionCount += 1;
    //alert("One point to bellyache!");
    if (questionCount >=6){
      updateResult();
    }
  }
  
function updateResult() {
  if ((ftbScore == 2 && nalScore == 2) && (rgpScore == 2 || melScore == 2 || lrhScore == 2)) {
    result.innerHTML = "Your result is... any Billie Eilish Song!</i>";
  }
  else if ((rgpScore == 2 && melScore == 2) && (ftbScore == 2 || nalScore == 2 || lrhScore == 2)) {
    result.innerHTML = "Your result is... any Billie Eilish Song!</i>";
  }
  if ((ftbScore == 2 && lrhScore == 2) && (rgpScore == 2 || melScore == 2 || nalScore == 2)) {
    result.innerHTML = "Your result is... any Billie Eilish Song!</i>";
  }

  else if (ftbScore >=4) {
    result.innerHTML = "You are like... <i>Francisca Tirona-Benitez!</i>";
  }
  else if (nalScore >=4) {
    result.innerHTML = "You are like... <i>Natividad Almeda-Lopez!</i>";
  }
  else if (rgpScore >=4) {
    result.innerHTML = "You are like... <i>Remedios Gomez-Paraiso!</i>";
  }
  else if (melScore >=4) {
    result.innerHTML = "You are like... <i>Magdalena Leones!</i>";
  } 
  else if (lrhScore >=4) {
    result.innerHTML = "You are like... <i>Liliosa Hilao!</i>";
  }  
  else {
    result.innerHTML = "Hmm... try again!";
  }
}

function refresh(){
  result.innerHTML = "Your result is...";
  var questionCount = 0;
  var ftbScore = 0;
  var nalScore = 0;
  var rgpScore = 0;
  var melScore = 0;
  var lrhScore = 0;

  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;
  document.getElementById("q1a5").disabled = false;

  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q2a4").disabled = false;
  document.getElementById("q2a5").disabled = false;
  
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q3a4").disabled = false;
  document.getElementById("q3a5").disabled = false;
  
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q4a4").disabled = false;
  document.getElementById("q4a5").disabled = false;
  
  document.getElementById("q5a1").disabled = false;
  document.getElementById("q5a2").disabled = false;
  document.getElementById("q5a3").disabled = false;
  document.getElementById("q5a4").disabled = false;
  document.getElementById("q5a5").disabled = false;
  
  document.getElementById("q6a1").disabled = false;
  document.getElementById("q6a2").disabled = false;
  document.getElementById("q6a3").disabled = false;
  document.getElementById("q6a4").disabled = false;
  document.getElementById("q6a5").disabled = false;

  document.getElementById("q7a1").disabled = false;
  document.getElementById("q7a2").disabled = false;
  document.getElementById("q7a3").disabled = false;
  document.getElementById("q7a4").disabled = false;
  document.getElementById("q7a5").disabled = false;
}