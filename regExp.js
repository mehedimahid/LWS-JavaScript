//       Perform case-insensitive matching
let txt = "I love my desh, visit my desh ";

let s = txt.search(/My/i); //case insensitive
let search = txt.search("my"); //case sensitive

let replace = txt.replace("desh", "country"); //case sensitive
let r = txt.replace(/Desh/i, "country"); //case insensitive

// console.log(s)
// console.log(search)
// console.log(r)
// console.log(replace)

//         //Perform a global match

let text = "Visit Microsoft powered by Microsoft";

let gs = text.match(/microsoft/gi);
let g = text.search(/microsoft/i);
// let  gr = text.replace(/microsoft/ig, 'W3School')

// console.log(g);
// console.log(gs)
// console.log(gr)

let num = "1 2 3 4 5";
let m = num.match(/[1-3]/g);
console.log(m);


let alp = 'A.B,C,D,E'
let mAlp= alp.match(/[A-C]/g)
console.log(mAlp)