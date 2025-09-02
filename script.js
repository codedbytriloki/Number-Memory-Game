const numberDisplay = document.getElementById("number-display");
const userInput = document.getElementById("userInput");
const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const inputField = document.querySelector(".input-builg")

let currentNumber = '';
let level = 1;

function generateNumber(length){
  let num = '';
  for(let i =0; i < length; i++){
    num += Math.floor(Math.random() * 10);
  }
  return num;
}

function startGame () {
  inputField.style.display = "none";
  submitBtn.style.display = "none";
  message.innerHTML = "";
  currentNumber = generateNumber(level+2);
  numberDisplay.textContent = currentNumber;
 
  setTimeout(() => {
    numberDisplay.innerHTML = "Now enter the number";
    userInput.value = "";
    inputField.style.display = "flex";
    submitBtn.style.display = "inline-block";
    startBtn.style.display = "none";
    userInput.focus();
  }, 2000)
}

function checkAnswer(){
  const userValue = userInput.value.trim();
 if(!userValue){
    message.innerHTML = "Please Your Answer";
    return;
  }

  if(userValue === currentNumber){
    level++;
    message.innerHTML = `Correct ! Level ${level}`;
  }
  else{
    message.innerHTML = `Wrong! Final Score: Level ${level} `;
  }

  startBtn.textContent = "Next";
  startBtn.style.display= "inline-block";
  inputField.style.display = "none";
  submitBtn.style.display = "none";
  numberDisplay.innerHTML = "Click Start to begin ...!";

}

startBtn.addEventListener('click' , startGame)
submitBtn.addEventListener('click', checkAnswer);
