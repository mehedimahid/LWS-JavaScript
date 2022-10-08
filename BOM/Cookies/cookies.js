"use strick";

function setCookie(cookieName, cookieValue, expireDay) {
  let d = new Date();
  d.setTime(d.getTime() + expireDay * 24 * 60 * 60 * 1000);
  let expires = "expires = " + d.toUTCString();
  document.cookie =
    cookieName + " =" + cookieValue + ";" + expires + "; path = /";
}

function getCookie(cookieName) {
  let name = cookieName + "=";
  let cookieArray = document.cookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let c = cookieArray[i];

    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length);
    }
  }
  return "";
}

function checkCookie(cookieName, expDay) {
  let username = getCookie(cookieName);
  if (username != "") {
    alert("Welcome again " + username);
  } else {
    let uname = prompt("Please enter your name:", "");
    if (uname != "" && uname != null) {
      setCookie(cookieName, uname, expDay);
    }
  }
}
