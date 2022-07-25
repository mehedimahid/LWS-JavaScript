// let personID = document.getElementById("person");

const person = {
  fname: "Mehedi",
  lname: "Hasan",
  get age() {
    let year = new Date().getFullYear();
    let birthYear = 2000;
    return year - birthYear;
  },

  get fullName() {
    return this.fname + " " + this.lname;
  },
};

// console.log(person.fullName());
////          // Adding New Propertie
person.nationality = "Bangladeshi";

document.getElementById("person").innerHTML = `
  Fast Name : ${person.fname} <br>
  Last Name : ${person.lname}<br>
  Full Name : ${person.fullName} <br>
  age: ${person.age}<br>
  Nationality: ${person.nationality}
`;

// console.log(person);

// console.log(person);
// //          //Deleting Properties

// delete person.eyeColor;
// delete person["eyeColor"];
// // console.log(person);

//              //Accessing JavaScript Properties
// console.log(person.age);
// console.log(person["age"]);
// let x = "age";
// console.log(person[x]);
//

//                                  //object loop

//
// let txt = "";
// for (const x in person) {
//   //   console.log(x);
//   txt += person[x] + " ";
// }

// // console.log(txt);

// const person2 = {
//   fname: "Andy",
//   lname: "Smith",
//   age: 26,
//   car: {
//     car1: "Volvo",
//     car2: "BMW",
//     car3: "Audi",
//   },
// };
// console.log(person2);
// console.log(person2.car.car1);
// console.log(person2.car["car2"]);
// console.log(person2["car"]["car3"]);

// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };

// let x = "";
// for (const i in myObj.cars) {
//   x += myObj.cars[i].name + ": ";
//   for (const j in myObj.cars[i].models) {
//     x += myObj.cars[i].models[j] + " ";
//   }
// }
// console.log(x);
// //
// const person5 = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// // console.log(person5); ///fullName function akare dekabe
// //access fullName as a function: person.fullName().

// const person6 = {
//   firstName: "John",
//   lastName: "Doe",
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };

// // console.log(person6); //fullName function akare dekabe na
// //  access fullName as a property: person.fullName.

///

// //            //Object Constructors

//

// function Person(first, last, age) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.fullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }

// const jasim = new Person("Jasim", "Uddin", 33);
// const sakib = new Person("Takib", "AL Hasasn", 35);
// const tamim = new Person("Tamim", "Ikbal", 35);
// jasim.country = "Bangladesh";

// Person.country = "Bangladesh"; //কোনো result  দিবে না
// Person.prototype.country = "Bangladesh"; //person এ country নামে একটি protype যোগ হবে

// console.dir(Person);
// console.log(tamim.country);
// console.log(sakib.country);

// console.log(jasim);
// console.log(sakib);
// console.log(sakib.fullName());
//

//                          //Object Iterator

// //
// let objects = {
//   one: 1,
//   two: 2,
//   three: 3,
// };
// console.dir(objects); //object এর protype এর ভিতর [symbol.iterator]  নেই তাই Object কে iterate  করা যায়  না

// let arr = [1, 2, 3];
// // console.dir(arr); //Array এর protype এর ভিতর [symbol.iterator]  আছে তাই Array কে iterate  করা যায়
// let arrIterator = arr[Symbol.iterator]();
// console.log(arrIterator.next()); //value: 1, done: false
// console.log(arrIterator.next()); //value: 2, done: false
// console.log(arrIterator.next()); // value 3, done: false
// console.log(arrIterator.next()); //value: undefine, done: true, value ses tai undefine dekabe
// console.log(arrIterator.next()); //value: undefine, done: true value ses tai undefine dekabe
// //      //object কে iterate করার উপায় (object  কে iterate করা যায়  না )

// //    // Create an Object
// const myObj = {};

// //        // Make it Iterable
// myObj[Symbol.iterator] = function () {
//   let n = 0;
//   let done = false;
//   return {
//     next() {
//       n += 10;
//       if (n == 100) {
//         done = true;
//       }
//       return {
//         value: n,
//         done: done,
//       };
//     },
//   };
// };

// for (const num of myObj) {
//   // console.log(num);
// }

//

//      //JavaScript Sets
//
//Set & Array  almost same
// let letters = new Set(["a", "b", "c", "d", "c", "a"]);
// // let letters = new Set();

// const myIterator = letters.values();
// let text = "";
// for (const value of myIterator) {
//   text += value + " ";
// }
// // console.log(text);

// const lettersIterator = letters.entries();

// for (const value of lettersIterator) {
//   // console.log(value); //return [value: value]
// }
// const a = "a";
// const b = "b";

// letters.add(a);
// letters.add(a);
// letters.add(b);
// letters.add("c");
// letters.add("d");
// console.log(letters);
// console.log(typeof letters); //return Object
// console.log(letters instanceof Set); //letters set kina seta bojar upay
// console.log(letters.values());
//

// Object Map

//
//Object & Map almost same

//Object : order important noy .alphabet অনুসারে রেজাল্ট আসবে

//Map : order ,index importans  যে ভাবে রাখব সে ভাবে থাকবে , size namok property ache
//JavaScript Objects vs Maps link(https://www.w3schools.com/js/js_object_maps.asp)
// const obj10 = {
//   lastName: "Smith",
//   firstName: "Mr",
// };

// obj10.age = 25;

// console.log(obj10);

// const fruits = new Map([
//   ["apples", 500],
//   ["oranges", 200],
//   ["bananas", 300],
// ]);

// fruits.set("Mango", 400);
// console.log(fruits);
// console.log(fruits.size);//rerurn 5
// console.log(fruits.get("bananas")); //return 300
// console.log(fruits.has("apples"));//return true
// console.log(typeof fruits); //return Object
// console.log(fruits instanceof Map);//return true
// fruits.delete("apples");
// console.log(fruits.has("apples")); //return false

// let texts = "";
// //map a forEach key value pair
// fruits.forEach(function (value, key) {
//   texts += key + " = " + value + "; ";
// });
// console.log(texts);

// // List all keys
// let veg = "";
// for (const x of fruits.keys()) {
//   veg += x + "  ";
// }

// // console.log(veg);

// let text = "";
// for (const x of fruits.entries()) {
//   text += x + " ";
// }
// console.log(text);

// Create Objects
const apples = { name: "Apples" };
const bananas = { name: "Bananas" };
const oranges = { name: "Oranges" };

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits);
console.log(fruits.get("Apples")); //return undefine
console.log(fruits.get(apples)); //return 500
