//1 নিচের বাক্যে কত  বার  cow আছে এবং প্রথম cow কত নাম্বার পজিশনে আছে ?

// let sentence =
//   "The cow is a very useful pet animal. It is a domestic animal kept by people at home for many purposes. The cow is a feminine gender of ox. The cow has four legs, two horns, a tail, two eyes, two ears and four udders. She eats a lot of grass and fodder.Cow produces milk.";

// let matches = sentence.match(/cow/gi);
// const occurence = matches ? matches.length : "not found!";

// console.log(matches);
// // console.log(occurence)

// let position = sentence.search(/cow/i);
// // position = position>= 0 ? position: 'not found'
// console.log(position);

// 2 i//nput :linearSearch(['a', 'b', 'c', 'd', 'e'], 'd')
//output: 3 or not found
//problem: linearSearch() function টি  implement করে দেখাও

// function linearSearch(arr, value) {
//   const length = arr.length;
//   for (let i = 0; i < length; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
//   return "not found";
// }

// console.log(linearSearch(["a", "b", "c", "d", "e"], "n"));

//3 কোনো  Array থেকে কি ভাবে সব থেকে বড় String বের করবেন এবং তার position কত ?

// function longestString(names) {
//   let longestName = " ";
//   for (const name of names) {
//     if (name.length > longestName.length) {
//       longestName = name;
//     }
//   }
//   return [longestName, names.indexOf(longestName) + 1];
// }

// console.log(
//   longestString(["mehedi Hasan", "Gourob", "learn with sumit", "redoyan"])
// );

//4 /   1-100 পর্যন্ত ৩ , ৫ বা ৩ ও ৫ উভয় দ্বারা বিভাজ্য তা খুজে বের কর ?

function divisible(number) {
  for (let i = 1; i <= number; i++) {
    // if (i % 15 === 0) {
    if ((i % 3 === 0) & (i % 5 === 0)) {
      //both codes are the same
      console.log(`${i} is divisible by both`);
    } else if (i % 3 === 0) {
      console.log(`${i} is divisible by 3`);
    } else if (i % 5 === 0) {
      console.log(`${i} is divisible by 5`);
    }
  }
}

// divisible(100);

//5  /কো নো  array থেকে কিভাবে  falsy value  বের করে বাদ দিতে পারি ?
//falsy value( undefine, NaN, null, 0, false,'' )

let mixArray = [
  "mehedi",
  undefined,
  "MHM",
  "",
  true,
  null,
  "apple",
  0,
  NaN,
  "Thank all",
  false,
];

// let trueArray = mixArray.filter(function (el) {
//   if (el) {
//     return true;
//   } else {
//     return false;
//   }
// });

const trueArray = mixArray.filter(Boolean);
// console.log(trueArray);

//6  /কোনো  obj থেকে কিভাবে  falsy value  বের করে বাদ দিতে পারি ?

const obj = {
  a: "mehedi",
  b: undefined,
  c: "MHM",
  d: "",
  e: true,
  f: null,
  g: "apple",
  h: 0,
  i: NaN,
  j: "Thank all",
  k: false,
};


const trueObj = function(obj){
    for (const i in obj) {
        if (!obj[i]) {
            delete obj[i];
            
        }
    }
    return obj
}
console.log(trueObj(obj))