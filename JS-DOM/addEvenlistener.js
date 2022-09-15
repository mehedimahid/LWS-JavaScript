// const style = document.querySelector("#style");

// function myfunction(text) {
//   console.log(text);
// }

// style.addEventListener("click", myfunction);
//when need parameter passing
// style.addEventListener("click", function () {
//   myfunction("button clicked");
//   // gghfgfg
// });

// style.addEventListener("mouseover", function () {
//   console.log("use put his mouse over this element");
// });

const myDiv = document.getElementById("myDIV");

myDiv.addEventListener("mousemove", myMoveFunction);

function myMoveFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}

function removeHandler() {
  myDiv.removeEventListener("mousemove", myMoveFunction);
}

// document.getElementById("myDIV").addEventListener("mousemove", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = Math.random();
// }

// function removeHandler() {
//   document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
// }
