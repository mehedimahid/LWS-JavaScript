function display(some) {
  console.log(some);
}

function calculator(num1, num2, callback) {
  let sum = num1 * num2;
  if (callback) {
    callback(sum);
  }
}

calculator(5, 2);

const paymentSucced = true;
const mark = 80;

function enroll(callback) {
  console.log("Course enrollment is in progress");
  setTimeout(function () {
    if (paymentSucced) {
      callback();
    } else {
      console.log("Payment failed");
    }
  }, 2000);
}

function progress(callback) {
  console.log("Course on pregress.....");
  setTimeout(() => {
    if (mark >= 80) {
      callback();
    } else {
      console.log("You could not get enought mark to get the Certificate");
    }
  }, 3000);
}

function getCertificate() {
  console.log("Please, wait... Preparing your certificate ");
  setTimeout(function () {
    console.log("Congrats! You got the certificate");
  }, 1000);
}

enroll(function () {
  progress(getCertificate);
});
