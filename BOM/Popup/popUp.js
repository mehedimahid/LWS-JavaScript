"use strict";

//JavaScript Popup Boxes .there are 3 type of popup box : 1. alert, 2.confirm, 3. propmt
const confirm = document.querySelector(".confirm");
const promptBox = document.querySelector(".prompt");

function showAlert() {
  alert("I am an alert box!");
}

function showConfirm() {
  let txt;
  if (window.confirm("sometext")) {
    txt = "you pressed OK";
  } else {
    txt = "you pressed cancelled ";
  }
  confirm.innerHTML = txt;
}

function showPrompt() {
  let person = prompt("Please enter your name:", "Harry Potter");
  let text;
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  promptBox.innerHTML = text;
}
