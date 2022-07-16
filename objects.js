// let personID = document.getElementById("person");

const person = {
  fname: "Mehedi",
  lname: "Hasan",
  age: function () {
    let year = new Date().getFullYear();
    let birthYear = 2000;
    return year - birthYear;
  },
  eyeColor: "blue",
  fullName: function () {
    return this.fname + " " + this.lname;
  },
};

// console.log(person.fullName());
//
document.getElementById("person").innerHTML = `
  Fast Name : ${person.fname} <br>
  Last Name : ${person.lname}<br>
  Full Name : ${person.fullName()} <br>
  age: ${person.age()}<br>
  Eye Color : ${person.eyeColor}
`;

// console.log(person);

//          // Adding New Propertie
person.nationality = "Bangladesh";
// console.log(person);
//          //Deleting Properties

delete person.eyeColor;
delete person["eyeColor"];
// console.log(person);

//              //Accessing JavaScript Properties
// console.log(person.age);
// console.log(person["age"]);
// let x = "age";
// console.log(person[x]);

//              //object loop

let txt = "";
for (const x in person) {
  //   console.log(x);
  txt += person[x] + " ";
}

// console.log(txt);

const person2 = {
  fname: "Andy",
  lname: "Smith",
  age: 26,
  car: {
    car1: "Volvo",
    car2: "BMW",
    car3: "Audi",
  },
};
// console.log(person2);
// console.log(person2.car.car1);
// console.log(person2.car["car2"]);
// console.log(person2["car"]["car3"]);

const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

let x = "";
for (const i in myObj.cars) {
  x += myObj.cars[i].name + ": ";
  for (const j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + " ";
  }
}
// console.log(x);
//
