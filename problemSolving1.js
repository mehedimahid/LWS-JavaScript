//কোন শ্রেণী কিছু স্টুডেন্ট এর নাম alphabetically সাজানো

// const students = ["Redowan", "Gourob", "Alamin", "Forhad", "Jannat"];
// console.log(students);

// let std = students.sort(); //main array কেও sort করবে

// console.log(std);

//কোন শ্রেণী কিছু স্টুডেন্ট এর Roll ক্রম অনুসারে  সাজানো
// const stdRoll = [3, 1, 5, 4, 2];

// console.log(
//   stdRoll.sort(function (a, b) {
//     return a - b;
//   })
// );

//কোন সাল leap year কিনা যে ভাবে বের করব

function leapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}
// leapYear(1600);

// function mdd(num) {
//   if (num % 4 === 0 && num % 100 !==0) {
//     console.log(`${num} is a leap year `)
//   }else{
//     console.log(`${num} is not a leap year `)
//   }
// }
// mdd(2025)

//কোন sentence এর মরধে vowel কতোটি আছে তা খুজা

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function vowelCount(sentense) {
  let count = 0;
  let senToArray = Array.from(sentense);
  senToArray.forEach(function (value, index, array) {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
}

// console.log(vowelCount("How are you"));

//কোন array  থেকে duplicate number কিভাবে বের করে আনতে পারি

const numbers = [1, 2, 3, 2, 4, 5, 6, 6, 4, 7, 5];

const dulicates = numbers.filter(function(value, index, array){
  return array.indexOf(value) !== index
})

console.log(`Duplicate numbers are =  ${dulicates}`)

//কোন array  থেকে duplicate number কিভাবে বের করে আনতে পারি


const uniques = numbers.filter(function(value, index, array){
  return array.indexOf(value) === index
})

console.log(`Uniques numbers are =  ${uniques}`)