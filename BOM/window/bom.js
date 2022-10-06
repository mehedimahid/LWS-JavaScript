"use strict";

let myWindow;

const width = document.getElementById("width");
const height = document.getElementById("height");

width.innerHTML = " Window inner width is " + window.innerWidth;
height.innerHTML = " Window inner height is " + window.innerHeight;

function openWindow() {
  myWindow = window.open("https://google.com");
}
function closeWindow() {
  myWindow.close();
}
