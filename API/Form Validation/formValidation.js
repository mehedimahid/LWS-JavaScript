const inputObj = document.getElementById("id1");
const demo = document.getElementById("demo");

function validation() {
  if (inputObj.validity.rangeOverflow) {
    inputObj.setCustomValidity("You have made a rang overFlow error!");
  } else if (inputObj.validity.rangeUnderflow) {
    inputObj.setCustomValidity("You have made a rang underFlow error!");
  } else if (inputObj.validity.valueMissing) {
    inputObj.setCustomValidity("value missing!");
  }
  if (!inputObj.checkValidity()) {
    demo.innerHTML = inputObj.validationMessage;
  }
}
