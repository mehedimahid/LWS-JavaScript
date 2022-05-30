// let x = 10
// x += 5
// console.log(x)
// console.log(x.toString())

let test = "b" + "a" + +"a" + "a";
// console.log(test.toUpperCase())

//          //#২০ JavaScript Bangla Tutorial |JavaScript Number Method

let x = 9.7191232;
// let x = .65650121012320

// let number = x.toExponential(10);
// console.log(typeof(x))

// console.log(x.toFixed(0))
// console.log(x.toFixed(2))
// console.log(x.toFixed(4))
// console.log(x.toFixed(8))

// console.log(x.toPrecision())
// // console.log(x.toPrecision(0))//argument must be between 1 and 100
// console.log(x.toPrecision(2))
// console.log(x.toPrecision(4))
// console.log(x.toPrecision(6))

// console.log(number.valueOf())

// console.log(Number(true))
// console.log(Number(false))
// console.log(Number('11'))
// console.log(Number('11  '))
// console.log(Number('-11'))
// console.log(Number('  11'))
// console.log(Number('11.33'))
// console.log(Number('11 years'))
// console.log(Number(' years 11'))
// console.log(Number(new Date("1970-01-01")))//right format
//         //wrong format more https://www.w3schools.com/js/js_date_formats.asp
// console.log(Number(new Date("01-01-1970")))

// console.log(parseInt('11'))
// console.log(parseInt('-11'))
// console.log(parseInt('11.33'))
// console.log(parseInt('11.50 12 13'))
// console.log(parseInt('11  '))
// console.log(parseInt('  11'))
// console.log(parseInt('11 years'))
// console.log(parseInt('years 11'))

// let maxValue = Number.MAX_VALUE
// console.log(maxValue)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)

//        //#২1 JavaScript Bangla Tutorial |JavaScript Array

// let cars = ["BMW", "Volvo", "Saab", "honda"];
// document.getElementById('demo').innerHTML= cars

// cars[0] = 'Opel'
// console.log(cars[0])

// console.log(typeof(cars))

// let text = "<ul>";
// let carsLength = cars.length //best practice আগে লেংথ বের করে নেয়া

// for (let i = 0; i < carsLength; i++) {
//   console.log(i);
//   console.log(cars[i]);
//   text += "<li>" + cars[i] + "</li>";
// }
// text += "</ul>";
// document.getElementById("demo").innerHTML = text;

// let fruits = ["Mango ", " Banana ", " Apple "];
// let text = "<ul>";
// cars.forEach(myFunction);
// text += "</ul>";

// function myFunction(value) {
//   console.log(value);
//   text += "<li>" + value + "</li>";
// }
// document.getElementById("demo").innerHTML = text;
// console.log("finished");

// let fruits = ['Mango ', ' Banana ', ' Apple ']
// document.getElementById('demo').innerHTML= fruits

// function myFruitFunction(){
//   fruits.push(' Jackfruit')
// document.getElementById('demo').innerHTML= fruits

// }

//23 JS Array Sort

// sorting ascending

// let alphabet = ["a", "c", "g", "b", "e", "d", "f"];
// let sortAlp = alphabet.sort();
// console.log(sortAlp);
// let n = [1, 25, 5, 100, 50, 2];

// console.log(n.sort()); //return wrong

// n.sort(function (a, b) {
//   return a - b;
// });

// console.log(n);

// sorting descending

// let reverseAlp = sortAlp.reverse(); //reverse করার  আগে sort করা ভাল
// console.log(reverseAlp);

// let n = [1, 25, 5, 100, 50, 2];

// console.log(n.sort()); //return wrong

// n.sort(function (a, b) {
//   return b - a;
// });

// // console.log(n);

// //search Highest number

// function myHighestNumber(arr) {
//   return Math.max.apply(null, arr);
// }
// console.log("The Highest Number is " + myHighestNumber(n));

//search Lowest number

// function myLowestNumber(arr) {
//   return Math.min.apply(null, arr);
// }
// // console.log("The Lowest Number is " + myLowestNumber(n));
// //
// let numberArray = [1, 100, 50, 25, 2];

// function myArrayMax(arr) {
//   let len = arr.length;
//   let max = -Infinity;
//   while (len--) {
//     if (arr[len] > max) {
//       max = arr[len];
//     }
//   }
//   return max;
// }

// console.log(myArrayMax(numberArray))

// let carsPrize = [
//   { name: "Volvo", prize: 200 },
//   { name: "BMW", prize: 500 },
//   { name: "Saab", prize: 300 },
// ];
// carsPrize.sort(function (a, b) {
//   return a.prize - b.prize;
// });

// console.log(carsPrize);

//          //#২4 JavaScript Bangla Tutorial |JavaScript Array Iteration

// const numbers = [3, 50, 9, 25, 27];

//forEach() method
// function myFunction(value, index, array) {
//   console.log(value);
//   console.log(index);
//   console.log(array);
//   console.log("---------");
// }

// numbers.forEach(myFunction);

//    //map() Method

// function myFunction(value, index, array) {
//   return value * 2;
// }

// const newNumber= numbers.map(myFunction)
// console.log(numbers)
// console.log(newNumber)

//      //array.filter()
// function myFunction(value, index, array) {
//   return value >18;
// }

// const newNumber = numbers.filter(myFunction);
// console.log(newNumber)

//        //array.reduce()

// function myFunction(total, value, index, array) {
//   console.log(total)
//   console.log('--------')
//   return total + value
// }

// const newNumber = numbers.reduce(myFunction);
// // const newNumber = numbers.reduce(myFunction,10);
// console.log(newNumber)

// //            //array.every()

// function myFunction(value, index, array) {
//   return value >18;
// }

// const newNumber = numbers.every(myFunction);
// console.log(newNumber)

//          //array.some()

// function myFunction(value, index, array) {
//   return value >18;
// }

// const newNumber = numbers.some(myFunction);
// console.log(newNumber)

// let alphabet = ["a", "c", "g", "b", "e", "d", "f"];

//        //array.indexOf()

// let position = alphabet.indexOf("g") + 1;
// console.log(position);

//      //array.includes()

// let include = alphabet.includes("b");
// console.log(include);

//      //array.find()

// function myFunction(value, index, array) {
//   return value >18;
// }

// const  newNumber = numbers.find(myFunction);
// console.log(newNumber)

//      //array.findIndex()

// function myFunction(value, index, array) {
//   return value > 18;
// }

// const newNumber = numbers.findIndex(myFunction) + 1;
// console.log(newNumber);

//      //Array.from()

// const mango=  Array.from('MANGO')
// console.log(mango)

// let mcs= Date.parse('25 mar 2020')
// console.log(mcs)
// let dt = new Date(mcs)
// let dt = new Date()
// console.log(dt )

//          //#২4 JavaScript Bangla Tutorial |JavaScript Math

// Math.round
// console.log(Math.round(5.5));
// console.log(Math.round(4.4));
// console.log(Math.round(-4.9));
// console.log(Math.round(-4.2));

// Math.ceil
// console.log(Math.ceil(5.5));
// console.log(Math.ceil(4.4));
// console.log(Math.ceil(-4.9));
// console.log(Math.ceil(-4.2));

// Math.floor
// console.log(Math.floor(5.5));
// console.log(Math.floor(4.4));
// console.log(Math.floor(-4.9));
// console.log(Math.floor(-4.2));

// Math.trunc
// console.log(Math.trunc(5.5));
// console.log(Math.trunc(4.4));
// console.log(Math.trunc(-4.9));
// console.log(Math.trunc(-4.2));

// Math.sign
// console.log(Math.sign(5.5));
// console.log(Math.sign(4.4));
// console.log(Math.sign(-4.9));
// console.log(Math.sign(-4.2));

//              //Random

// //return a integer number (1-9)
// console.log(Math.floor(Math.random() * 10));

//return a integer number (1-10)
// console.log(Math.floor(Math.random() * 10) + 1);

//      //লুডু খেলায় আমরা ১-৬ প্রিন্ট করতে পারি 
// function ludo(max, min) {
//   return Math.floor(Math.random() * (max - min) + 1) + min;
// }

// console.log(ludo(6, 1));
