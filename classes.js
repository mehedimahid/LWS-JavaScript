// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

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

// class Player {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }
//   play(status) {
//     console.log(`${this.name} aged ${this.age} is playing ${status}`);
//   }
// }

// const p1 = new Player("Sakib",35);
// const p2 = new Player("Tamim", 36);

// p1.play("well");
// p2.play("bad");

//

//          //JavaScript Class Inheritance

// //
// class Car {
//   constructor(brand) {
//     this.carName = brand;
//   }
//   present() {
//     return "I have a " + this.carName;
//   }
// }

// class Model extends Car {
//   constructor(brand, model) {
//     super(brand);
//     this.model = model;
//   }
//   show() {
//     return this.present() + ", it is a " + " " + this.model;
//   }
// }

// // কনস্ট্রাক্টর পদ্ধতিতে super() method কল করার মাধ্যমে, আমরা প্যারেন্টস কনস্ট্রাক্টর মেথডকে কল করি এবং প্যারেন্টের বৈশিষ্ট্য এবং পদ্ধতিতে অ্যাক্সেস পাই।

// let myCar1 = new Model("Ford", "Mustang");
// let myCar2 = new Model("Audi", "2000");
// console.log(myCar1.show());
// console.log(myCar2.show());

// class Book {
//   constructor(book) {
//     this.bookName = book;
//   }
//   get bname() {
//     return this.bookName;
//   }
//   set bname(x) {
//     this.bookName = x;
//   }
// }

// let book = new Book("English");
// // book.bname = "Bangla";
// console.log(book.bname);

//

//        //JavaScript Static Methods

//Object create  না করেও ব্যাবহার করতে চাইলে static method ব্যাবহার করা হয়

// class SayHello {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello() {
//     return "Hello!";
//   }
// }

// let hello = new SayHello();
// console.log(SayHello.hello());

class Hi {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hi " + x.name;
  }
}
let myname = new Hi("Mr Smith");
console.log(Hi.hello(myname));
