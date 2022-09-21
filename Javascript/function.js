// function sleep(name) {
//   console.log(name + " is sleeping from 11PM");
// }

// sleep("Jaime");
// sleep("A. Karim");
// sleep("A. Rahim");

// const car={
//     name: 'Fiab',
//     model: 500,
//     weight: '5000kg',
//     start: function(){
//         console.log('car has started')
//         this.drive()
//     },
//     drive:function(){
//         console.log('car is driving')

//     }
// }

// console.log(car.model)
// console.log(car['weight'])
// car.start()

// let arr = [1, 2, 3];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// // console.log(sum)

// const cart = [
//   {
//     title: "Mobile",
//     price: 500,
//   },
//   {
//     title: "Mobile 2",
//     price: 250,
//   },
//   {
//     title: "Mobile 3",
//     price: 250,
//   },
// ];

// let result = 0;

// cart.forEach(function ( a ) {
//     // console.log( a );
//     if( a.price ){
//         result += a.price;
//     }
// });
// console.log( result )

// let value = cart.map(function (item) {
//   // console.log( item )
//   return item.price;
// });
// console.log(value);

// let summation = value.reduce(function (total, price) {
//   return total + price;
// });
// document.getElementById("demo").innerHTML = summation;

// function myFunc(total , num) {
//     console.log( total );
//     // console.log( num );
//     return total + num.price;
// }

//

//        //73 JS Function Parameters

//
//self invoking function যে function একায় একায় নিজেকে কল করে
//IIFE =>  Immediately invoked function expression

// (function () {
//   console.log("I am a self invoking function ");
// })();

// function a(a, b) {
//   console.log("I am a Function");
//   return a * b;
// }

// let a = (a, b) => {
//   console.log("I ama Function");
//   a * b;
// }; //Arrow function

//      // Default Parameters

// function a(x = 1, y = 1) {
//   return x * y;
// }
// console.log(a(3, 5));
// console.log(a(5));

// function a(Parameters) {}
//a(argument)
// so parameter & argument not same

// function findMax() {
//   // console.dir(arguments);
//   let max = -Infinity;
//   let length = arguments.length;
//   for (let i = 0; i < length; i++) {
//     if (arguments[i] > max) max = arguments[i];
//   }
//   return max;
// }

// x = findMax(1, 123, 500, 1115, 44, 88);

// console.log(x);
//    //Arguments are Passed by Value

// function b(x, y) {
//   x = x * 2;
//   return x * y;
// }
// let m = 5;
// let n = 3;
// // console.log(b(m, n));
// // console.log(m);//m  ar man 5 takbe change hbe na

// //      //Objects are Passed by Reference

// function objChang(x) {
//   x.four = 7;
//   return x.four * x.five;
// }

// let obj = {
//   four: 4,
//   five: 5,
// };
// console.log(objChang(obj));
// console.log(obj); //obj ar man  change hbe{ four ar man change hye 7 hbe}

//If a function invocation is preceded with the new keyword, it is a constructor invocation.

// It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:

// function myFunction(arg1, arg2) {
//   this.firstName = arg1;
//   this.lastName = arg2;
// }

// const myObj = new myFunction("john", "Doe");
// console.log(myObj); //return myFunction Object
// console.log(myObj.firstName); //return "John"
// console.log(myObj.lastName); //return "John"

//            //call()

// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// console.log(person.fullName.call(person1)); //return "John Doe";
// console.log(person.fullName.call(person2)); //return "Mary Doe"

// const personCons = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + "  " + city + "," + country;
//   },
// };

// const person3 = {
//   firstName: "John",
//   lastName: "Doe",
// };
//first param obj dite hbe jake se this ble dorbe
// console.log(personCons.fullName.call(person3, "Oslo", "Norway"));
//

//          //apply()

//

//apply()  method ব্যাবহার করে কোনো array এর  লুপ ছারায় max value বের করতে পারব

// console.log(Math.max(1, 2, 3)); //return 3
// console.log(Math.max([1, 2, 3])); //return NaN
// console.log(Math.max.apply(null, [1, 2, 3])); //return 3
// console.log(Math.max.apply("", [1, 2, 3])); //return 3
// console.log(Math.max.apply(Math, [1, 2, 3])); //return 3
// console.log(Math.max.apply(0, [1, 2, 3])); //return 3

//
//          //bind()

//
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen",
// };

// let fullName = person.fullName.bind(member); //return Hege Nilsen
// console.log(fullName());

function temporary() {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
}
let add = temporary();

// console.dir(add);
console.log(add());
console.log(add());
console.log(add());
