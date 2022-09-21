//alone

// console.log(this)//refer window object

//in a Function

// function a() {
//     let b= this//refer window object
//     console.log(b)
// }
// a()

// function a() {
//   " use strict";
//   let b = this; //refer window object
//   console.log(b);
// }
// a();

let person = {
  firstName: "John",
  lastName: "Doe",
  Id: 5001,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getFullName: function () {
    return this.fullName();
  },
};

// console.log(person.fullName())
// console.log(person.getFullName())

let person1 = {
  firstName: "Mehedi",
  lastName: "Hasan",
};

let person2 = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
};

console.log(person2.fullName.call(person1));
