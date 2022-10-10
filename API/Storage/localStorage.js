function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getLocalStorage(key) {
  alert(localStorage.getItem(key));
}
function lengthLocalStorage() {
  alert(localStorage.length);
}

function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

function clearLocalStorage() {
  localStorage.clear();
}
