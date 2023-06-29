"use strict";
const message = document.querySelector(".message");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const number = document.querySelector(".number");
const displayScore = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const guess = Number(document.querySelector(".guess").value);
let generatedNumber = Math.trunc(Math.random() * 20) + 1;
let isPlayable = true;
let score = 20;
//Functions

const deductPoints = function () {
  score--;
  displayScore.textContent = score;
};

const winGame = function () {
  message.textContent = "You guessed the right number!";
  highScore.textContent = score;
  document.body.style.backgroundColor = "#60b347";
  isPlayable = false;
  number.style.width = "30rem";
  number.textContent = generatedNumber;
};

const tooHigh = function () {
  message.textContent = "Too high";
  deductPoints();
};

const tooLow = function () {
  message.textContent = "Too low";
  deductPoints();
};

const loseGame = function () {
  isPlayable = false;
  message.textContent = "You lost the game";
};

const reset = function () {
  isPlayable = true;
  message.textContent = "Start guessing...";
  score = 20;
  displayScore.textContent = score;
  number.textContent = "?";
  document.body.style.backgroundColor = "rgb(15, 15, 15)";
  generatedNumber = Math.trunc(Math.random() * 20) + 1;
};

const enterValidNumber = function () {
  message.textContent = "Plese enter an number between 1-20";
  deductPoints();
};

//Game logic
const checkNumber = function () {
  const guess = Number(document.querySelector(".guess").value);
  number.textContent = generatedNumber;

  if (score > 0 && isPlayable) {
    if (!guess) {
      enterValidNumber();
    } else if (guess === generatedNumber) {
      winGame();
      return;
    } else if (guess > generatedNumber) {
      tooHigh();
    } else if (guess < generatedNumber) {
      tooLow();
    }
  } else {
    loseGame();
  }
};
const randomColor = function () {
  const generateRandomValue = () => Math.floor(Math.random() * 256);
  const x = generateRandomValue();
  const y = generateRandomValue();
  const z = generateRandomValue();
  const bgColor = `rgb(${x}, ${y}, ${z})`;

  document.body.style.background = bgColor;
};
//Event listners
check.addEventListener("click", checkNumber);
again.addEventListener("click", reset);
again.addEventListener("click", randomColor);

document.addEventListener("keydown", logKey);
function logKey(e) {
  if (`${e.code}` == "Escape") {
    reset();
  }
  if (`${e.code}` == "Enter") {
    checkNumber();
  }
}
