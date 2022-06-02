//      //Ternary Operator(?)

let age = "18";

// if (age>= 18) {
//     console.log('You are adult')
// }else{
//     console.log('You are not adult')
// }

// console.log((age>=18)?'You are adult': 'You are not adult' )

// console.log(
//   age >= 18
//     ? age > 32
//       ? "You are not suitable for this job. You are over 32 years old"
//       : "Your are perfect this job "
//     : "You are less than 18 years old "
// );

// age = Number(age)

// if(isNaN(age)){
//   console.log(` Input is not a number  `)
// }else{
//   console.log((age< 18)? 'Too young' : 'Old enough')
// }

//          //Switch statement
// let fruits = "Banana";

// switch (fruits) {
//   case "Banana":
//     console.log("Banana");
//     break;
//   case "Mango":
//     console.log("Banana");
// }

// const date = new Date();
// console.log(date);

// const today = date.getDay();
// console.log(today);

// switch (today) {
//   case 0:
//     console.log("Today is sunday");
//     break;
//   case 1:
//     console.log("Today is monday");
//     break;
//   case 2:
//     console.log("Today is tuesday");
//     break;
//   case 3:
//     console.log("Today is wednesday");
//     break;
//   case 4:
//     console.log("Today is thursday");
//     break;
//   case 5:
//   case 6:
//     console.log("It is Weekend holiday ");
// }

//          // for loop

// const alp = ["A", "B", "C", "D", "E"];

// for (let i = 0; i < alp.length; i++) {
//   console.log(i);
//   console.log(alp[i]);
// }

// for('statement1'; 'statement2';'statement3'){
//  // code block to be executed
// }
//  // statement 1 = optinal..You can set the value before looping

//  // statement 2 = also optinal ... If you omit statement 2, you must provide a break inside the loop

let i = 1;

for (;;) {
  if (i > 5) {
    break;
  } else {
    console.log(i);
  }
  i++; //i-- //you can provide here
}
