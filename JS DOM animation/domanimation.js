function myMove() {
  const animation = document.getElementById("animate");

  let poss = 0;

  let interval = setInterval(frame, 10);

  function frame() {
    if (poss < 350) {
      poss++;
      animation.style.top = poss + "px";
      animation.style.left = poss + "px";
    } else {
      clearInterval(interval);
    }
  }
}
