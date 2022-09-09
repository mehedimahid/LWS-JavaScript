const style = document.querySelector("#style");

function myfunction(text) {
  console.log(text);
}

// style.addEventListener("click", myfunction);
//when need parameter passing
style.addEventListener("click", function () {
  myfunction("button clicked");
});
style.addEventListener("mouseover", function () {
  console.log("use put his mouse over this element");
});
