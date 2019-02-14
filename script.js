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
  counter.unshift(number.toFixed(0));
  console.log(counter);

  const clone = document
    .querySelector("#boxtemplate")
    .content.cloneNode(true);

  const box = clone.querySelector("#box");

  let height = getRandomNumber() + "px";
  console.log(height);
  box.style.height = getRandomNumber() + "px";

  const elm = document.querySelector("#container").append(clone);

  // counter
  number++;

  // limit to - delete the last
  if (counter.length > max_length) {

    //Remove the first one
    document.querySelector("#box").remove();
  }

  // timer function
  setTimeout(createBoxes, 1000);
};

function getRandomNumber() {
  const num = Math.random() * 100;
  return num;
}