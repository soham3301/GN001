"use strict";

// document.querySelector(".message").textContent = "Correct Number";

// document.querySelector(".number").textContent = 10;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 50;

let secretNumber = Math.round(Math.random() * 20);
let score = 5;
let highScore = 0;

let resetValue = new Audio("sounds/resetValue.wav");
let noNumber = new Audio("sounds/notNumber.wav");
let winSound = new Audio("sounds/winningScore.wav");
let highScoreSound = new Audio("sounds/highScore.wav");
let looseSoundHigh = new Audio("sounds/loosingScore.wav");
let lowScoreSound = new Audio("sounds/lowScore.wav");
let looseSoundLow = new Audio("sounds/loosingScore.wav");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.round(Math.random() * 20);
    score = 5;
    document.querySelector(".score").textContent = 5;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".final-win").textContent = "Guess My Number!";
    document.querySelector(".number").style.width = "15rem";
    resetValue.play();
  });

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No Number Detected!";
    document.querySelector("body").style.backgroundColor = "#293462";
    noNumber.play();
  } else if (secretNumber === guess) {
    document.querySelector(".message").textContent = "💥 CORRECT NUMBER";
    document.querySelector(".final-win").textContent = "💖 Congratulation 💘";
    document.querySelector("body").style.backgroundColor = "#60b647";
    document.querySelector(".number").style.width = "50rem";
    document.querySelector(".number").textContent = secretNumber;
    winSound.play();
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "🔻 Select a Lower Number";
      score--;
      document.querySelector(".score").textContent = score;
      highScoreSound.play();
    } else {
      document.querySelector(".message").textContent = "🚩 You Lost The Game";
      document.querySelector(".final-win").textContent = "😫 Game Over 😭";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".number").style.width = "50rem";
      document.querySelector("body").style.backgroundColor = "#EB1D36";
      looseSoundHigh.play();
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "🔺 Select a Higher Number";
      score--;
      document.querySelector(".score").textContent = score;
      lowScoreSound.play();
    } else {
      document.querySelector(".message").textContent = "🚩 You Lost The Game";
      document.querySelector(".final-win").textContent = "😫 Game Over 😭";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".number").style.width = "50rem";
      document.querySelector("body").style.backgroundColor = "#EB1D36";
      looseSoundLow.play();
    }
  }
});
