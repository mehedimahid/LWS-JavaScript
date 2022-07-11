//          ////#40 JavaScript Bangla Tutorial |JavaScript Itaretion
//Array & string iterables kora jay but object jay na

const array = [1, 2, 3, 4, 5];
let str = "ABCDE";

for (let x of array) {
  //   console.log(x);
}

for (let x of str) {
  //   console.log(x);
}

// let obj = {
//   name: "Jonh",
//   age: 30,
// };

// for (const o of obj) {
//   //  console.log(x);  //return error
// }

//             //#40 JavaScript Bangla Tutorial |JavaScript Set

// const fruits =new Set( ['Mango', 'Banana', 'Pineapple', 'Mango'])
// console.log(fruits)

const set = new Set();

// set.add('a')
// set.add('b')
// set.add('c')

const a = "a";
const b = "b";
const c = "c";

set.add(a);
set.add(b);
set.add(c);
// console.log(set)

//             //#40 JavaScript Bangla Tutorial |JavaScript Map

const map = new Map([
  ["Apple", 150],
  ["Mango", 50],
]);
map.set(0, 0); //key & value add korbe
map.set("a", 1);
map.set("a", 1);
map.set("d", 4);
map.set("e", 5);
map.set("b", 2);
map.set("c", 3);

// console.log(map);
// console.log(map.get('a'))//return value

// console.log(map.size);

// console.log(map.has('a'))
// console.log(map.get('Apple'))

// console.log(map.has(0))//return true

// map.delete(0)
// console.log(map.has(0))//return false

// let text = "";
// map.forEach(function (value, key) {
//   text += key + " = " + value + ', ';
// });
// // console.log(text)

// for (const x of map.entries()) {
//   // console.log(x);
// }

//      //arow function

// let arrowFunction = () =>  "hello";
// console.log(arrowFunction())

// let test = n => 'hello'+ ' ' + n

// console.log(test('Smith'))

//                       //Javascript JSON

let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// console.log(text)

let obj = JSON.parse(text);
// console.log(obj)

let person1 = obj.employees[0].firstName;
// console.log(person1);

// let person = {
//   firstName: "Mehedi",
//   lastName: "Hasan",
// };

// let conjson = JSON.stringify(person)
// console.log(conjson)

function practices(x=1, y=1){
  console.log(x)
  console.log(y)
}

practices(5)