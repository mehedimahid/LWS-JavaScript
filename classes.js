class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

// let myCar1 =new Car('BMW', 2014)
// console.log(myCar1)

// let myCar2 =new Car('audi', 2020)
// // console.log(myCar2.name)

// class Person {
//   constructor(name, birthYear) {
//     this.name = name;
//     this.year = birthYear;
//   }
//   age(year){
//     let date = new Date;
//     return date.getFullYear() - this.year
//     // return date.getFullYear() - year

//   }
// }

// let person1 = new Person('John', 1995)
// console.log(person1.age())
// // console.log(person1.age(2000))

class Player {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  play(status) {
    console.log(`${this.name} aged ${this.age} is playing ${status}`);
  }
}

const p1 = new Player("Sakib",35);
const p2 = new Player("Tamim", 36);

p1.play("well");
p2.play("bad");
