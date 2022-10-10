function setSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
}

function getSessionStorage(key) {
  alert(`${key} : ${sessionStorage.getItem(key)}`);
}

function lengthSessionStorage() {
  alert(`sessionStorage has  ${sessionStorage.length} keys`);
}

function removeSessionStorage(key) {
  sessionStorage.removeItem(key);
}

function clearSessionStorage() {
  sessionStorage.clear();
}
