"use strict";

const counter = [];
let number = 0;
const max_length = 40;

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");
  createBoxes();
}

function createBoxes() {
  console.log("counter");

  // add number to array
  counter.unshift(number);
  console.log(counter);

  // clone box
  const clone = document.querySelector("#boxtemplate").content.cloneNode(true);
  const box = clone.querySelector("#box");

  // random number
  let randomNumber = getRandomInt(0, 35);
  console.log(randomNumber);

  // box height & color
  box.style.height = randomNumber + "vh";

  if (randomNumber >= 0 && randomNumber <= 5) {
    box.style.backgroundColor = "Red";
  }
  if (randomNumber >= 6 && randomNumber <= 10) {
    box.style.backgroundColor = "Orange";
  }
  if (randomNumber >= 11 && randomNumber <= 19) {
    box.style.backgroundColor = "Yellow";
  }
  if (randomNumber >= 20 && randomNumber <= 29) {
    box.style.backgroundColor = "LimeGreen";
  }
  if (randomNumber > 30) {
    box.style.backgroundColor = "Green";
  }

  box.addEventListener("click", () =>
    alert("Number of guests: " + randomNumber)
  );

  const cloneBox = document.querySelector("#container").append(clone);

  // counter
  number++;

  // limit to - delete the last
  if (counter.length > max_length) {
    //Remove the first one
    document.querySelector("#box").remove();
  }

  // delay after filleing the screen
  if (number <= 39) {
    createBoxes();
  } else {
    // timer function
    setTimeout(createBoxes, 1000);
  }
}
//Random function - The maximum is exclusive and the minimum is inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
