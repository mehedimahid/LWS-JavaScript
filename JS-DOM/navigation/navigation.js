// const p = document.getElementById("demo");

// const way1 = p.innerHTML;
// const way2 = p.firstChild.nodeValue;

// const way3 = p.childNodes[0].nodeValue;
// console.log(way1); //return text
// console.log(way2); //return text
// console.log(way3); //return text

//                  //Creating New HTML Elements (Nodes)

const para = document.createElement("p");
const text = document.createTextNode("This is new text");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
para.appendChild(text);

const div = document.getElementById("demo");
// div.appendChild(para);//শেষে যুক্ত হবে

//কোন চাইল্ড এর পূর্বে যুক্ত করেতে চাইলে insertBefore ব্যাবহার করতে হবে
//
// div.insertBefore(para, p1);

// //                                       //Removing HTML Elements (Nodes)

// p2.remove();

// div.removeChild(p2);
// console.log("text");

//                                  //replaceChild

div.replaceChild(para, p3);
