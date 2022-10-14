const demo = document.getElementById("demo");

let w;

function startWorker() {
  //check worker browser support
  if (typeof Worker !== "undefined") {
    //worker available
    if (typeof w == "undefined") {
      //create a new worker name w
      w = new Worker("worker.js");
    }
    w.onmessage = function (even) {
      demo.innerHTML = even.data;
    };
  } else {
    //worker not available
    alert("Sorry! your browser does not support Web Worker");
  }
}

function stopWorker() {
  if (typeof Worker !== "undefined") {
    w.terminate();
    w = undefined;
  } else {
    alert("Sorry! your browser does not support Web Worker");
  }
}
