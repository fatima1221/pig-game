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

//Starting point
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add("hidden");

let curScore = 0;

//implementing functionality
btnRoll.addEventListener("click", function () {
  //1 generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2 display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `img/dice-${dice}.png`;
  //3 check if it is not one add to current score
  if (dice !== 1) {
    curScore += dice;
    curEl0.textContent = curScore;
  } else {
    //switch to next player
  }
});
