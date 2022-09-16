const p = document.getElementsByTagName("p");

// console.dir(p); //collection dibe joto p ace
// console.dir(typeof p);
//return Object. look like an array but it's not a Array. you can loop(just like an Array ) in the html collection

//The Difference Between an HTMLCollection and a NodeList
//more https://www.w3schools.com/js/js_htmldom_nodelist.asp

const htmlcollection = document.getElementsByClassName("demo");
const nodelist = document.querySelectorAll(".demo");

// console.log(htmlcollection); //return Html Collection
// console.log(nodelist); //return Node list
// console.dir(document.querySelectorAll(".demo")[0]);
// console.dir(document.getElementsByClassName("demo")[0]);
// console.log(htmlcollection[0]);
// console.log(nodelist[0]);

// /Difference

// HTMLCollection items can be accessed by their name, id, or index number.
// NodeList items can only be accessed by their index number.

console.log(htmlcollection["two"]);
console.log(nodelist["two"]); //return undefine
