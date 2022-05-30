// function sleep(name){
//     console.log(name + ' is sleeping from 11PM')

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

let arr = [1, 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
// console.log(sum)

const cart = [
  {
    title: "Mobile",
    price: 500,
  },
  {
    title: "Mobile 2",
    price: 250,
  },
  {
    title: "Mobile 3",
    price: 250,
  },
];

let result = 0;

// cart.forEach(function ( a ) {
//     // console.log( a );
//     if( a.price ){
//         result += a.price;
//     }
// });
// console.log( result )

let value = cart.map(function (item) {
  // console.log( item )
  return item.price;
});
console.log(value);

let summation = value.reduce(function (total, price) {
  return total + price;
});
document.getElementById("demo").innerHTML = summation;

// function myFunc(total , num) {
//     console.log( total );
//     // console.log( num );
//     return total + num.price;
// }

