let person = {
  firstName: "John",
  lastName: "Doe",
  Id: 5001,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// console.log(person.fullName())

//alone

// console.log(this)//refer window object

//in a Function

// function a() {
//     let b= this//refer window object
//     console.log(b)
// }
// a()

function a() {
  " use strict";
  let b = this; //refer window object
  console.log(b);
}
a();
