"use strict";

//selecting elements
const scoreEl0 = document.querySelector("#score--0");
const scoreEl1 = document.getElementById("score--1");
const curEl0 = document.getElementById("current--0");
const curEl1 = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

//Starting point
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let curScore = 0;
let activePlayer = 0;
let game = true;

//switching to next player

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//implementing functionality
btnRoll.addEventListener("click", function () {
  if (game) {
    //1 generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2 display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `img/dice-${dice}.png`;
    //3 check if it is not one add to current score
    if (dice !== 1) {
      curScore += dice;
      //building id name dynamicly
      document.getElementById(`current--${activePlayer}`).textContent =
        curScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

//handle score
btnHold.addEventListener("click", function () {
  if (game) {
    //1. add current score to active player's score
    scores[activePlayer] += curScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if player's score is >=100
    if (scores[activePlayer] >= 100) {
      //if yes finish the game
      game = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
      diceEl.classList.add("hidden");
    } //3. else switch to the next player
    else {
      switchPlayer();
    }
  }
});
