"use strict";
let playing = true;
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  console.log(secretNumber);
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Please enter a number between 1-20");
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess === secretNumber) {
    displayMessage("Correct Number! Bravo!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;

      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  playing = true;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;

  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";

  document.querySelector(".number").style.width = "15rem;";

  random_bg_color = function () {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = bgColor;
  };
  random_bg_color();
});
