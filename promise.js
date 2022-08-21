// const abc = false;
// console.log("Now, I am learning Promise");

// //promise definition
// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (abc) {
//       resolve("Success");
//     } else {
//       reject("failed");
//     }
//   }, 2000);
// });

// //promise call

// promise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
// console.log("Task end");

const paymentSucced = true;
const mark = 80;

function enroll() {
  console.log("Course enrollment is in progress");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSucced) {
        resolve();
      } else {
        reject("Payment failed");
      }
    }, 2000);
  });
  return promise;
}

function progress() {
  console.log("Course on pregress.....");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (mark >= 80) {
        resolve();
      } else {
        reject("You could not get enought mark to get the Certificate");
      }
    }, 3000);
  });
  return promise;
}

function getCertificate() {
  console.log("Please, wait... Preparing your certificate ");
  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Congrats! You got the certificate");
    }, 1000);
  });
  return promise;
}

enroll()
  .then(progress)
  .then(getCertificate)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
