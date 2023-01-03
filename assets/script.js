var countDown = document.querySelector("#countDown");
var button = document.querySelector("#start");
var secondsLeft = 60;
var A1 = document.querySelector("#A1");
var A2 = document.querySelector("#A2");
var A3 = document.querySelector("#A3");
var A4 = document.querySelector("#A4");
var titel = document.querySelector("#quizTitle");
var score=0;

A1.classList.add("invisable");
A2.classList.add("invisable");
A3.classList.add("invisable");
A4.classList.add("invisable");



function startCountdownTimer() {
    var timerInterval = setInterval(function() {    
    secondsLeft--;
        countDown.textContent = secondsLeft;
        if(secondsLeft <= 0) {
      alert ("time is up")
      return;
            
          }
      
        }, 1000);
      }
function scoreIncrease(){
score+=1;
}
function timeDecrease(){
  secondsLeft-=5;
}


  function Quiz(){

    titel.innerHTML=("what is this quiz about?");
    A1.innerHTML=("Java script");
    A2.innerHTML=("CSS");
    A3.innerHTML=("HTML");
    A4.innerHTML=("potatoes");
   A1.addEventListener("click", scoreIncrease);
   A2.addEventListener("click", timeDecrease);
   A3.addEventListener("click", timeDecrease);
   A4.addEventListener("click", timeDecrease);
   A1.addEventListener("click", Quiz2 );
   A2.addEventListener("click", Quiz2 );
   A3.addEventListener("click", Quiz2 );
   A4.addEventListener("click", Quiz2 );
  }    

function Quiz2(){
  titel.innerHTML=("what brackets do you use around a function?");
  A1.innerHTML=("Square");
  A2.innerHTML=("Straight");
  A3.innerHTML=("curly");
  A4.innerHTML=("potatoes");
  A3.addEventListener("click", scoreIncrease);
   A2.addEventListener("click", timeDecrease);
   A1.addEventListener("click", timeDecrease);
   A4.addEventListener("click", timeDecrease);
   A1.addEventListener("click", Quiz3 );
   A2.addEventListener("click", Quiz3 );
   A3.addEventListener("click", Quiz3 );
   A4.addEventListener("click", Quiz3 );
}

function Quiz3(){
  titel.innerHTML=("what goes at the end of a variable?");
  A1.innerHTML=("|");
  A2.innerHTML=(":");
  A3.innerHTML=(";");
  A4.innerHTML=("potatoes");
  A3.addEventListener("click", scoreIncrease);
   A2.addEventListener("click", timeDecrease);
   A1.addEventListener("click", timeDecrease);
   A4.addEventListener("click", timeDecrease);
   A1.addEventListener("click", yourScore );
   A2.addEventListener("click", yourScore );
   A3.addEventListener("click", yourScore );
   A4.addEventListener("click", yourScore );
   console.log(score);
}

function yourScore(){
  alert("your score "+score);
  var initals = prompt("what are your initials?");
  localStorage.setItem("HighScore", initals+score);
  alert("High Scores "+ localStorage.getItem("HighScore"));
secondsLeft=1000;
  
}



function visability(){
  button.classList.add("invisable");
  A1.classList.remove("invisable");
  A2.classList.remove("invisable");
  A3.classList.remove("invisable");
  A4.classList.remove("invisable");
}



  button.addEventListener("click", startCountdownTimer);
  button.addEventListener("click", visability);
  button.addEventListener("click", Quiz);

