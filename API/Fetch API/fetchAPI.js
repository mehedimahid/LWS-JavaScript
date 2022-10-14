const display = document.getElementById("display");

// use promise
// function getData() {
//   fetch("http://127.0.0.1:5500/API/Fetch%20API/data.txt")
//     .then((res) => res.text())
//     .then((data) => {
//       display.innerText = data;
//     });
// }

//use async await
async function getData() {
  const res = await fetch("http://127.0.0.1:5500/API/Fetch%20API/data.txt");
  const data = await res.text();
  display.innerText = data;
}
