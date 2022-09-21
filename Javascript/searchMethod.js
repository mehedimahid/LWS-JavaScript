let str = 'Please locate where "locate" occurs!'
// document.getElementById("demo").innerHTML = str;

// console.log(str.indexOf('locate',15))
// console.log(str.lastIndexOf('locate',15))
console.log(str.search('locate'))

console.log(str.startsWith('Please'))
console.log(str.startsWith('locate', 7))//searchvalue , start index

console.log(str.endsWith('!'))
console.log(str.endsWith('locate', 13)) //searchvalue, length (where search end)



// let text = 'The rain in SPAIN stay mainly in the plain'
// console.log(text.match(/ain/gi))
  