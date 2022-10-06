// JavaScript Timing Events. there are 2 type of Timing Events 1. setInterval, 2.setTimeout

const interval = document.getElementById("setInterval");
const timeOut = document.getElementById("setTimeOut");
let timeOutInstance;
let timeIntervalInstance;

function startSetTimeout() {
  timeOutInstance = setTimeout(function () {
    timeOut.innerHTML = "3 second over";
  }, 3000);
}

function stopSetTimeout() {
  clearTimeout(timeOutInstance);
}

function startSetInterval() {
  timeIntervalInstance = setInterval(function () {
    interval.innerHTML = new Date().toLocaleTimeString();
  }, 1000);
}

function stopSetInterval() {
  clearInterval(timeIntervalInstance);
}
