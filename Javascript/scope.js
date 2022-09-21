

var x = 'Volvo'//this is Global scope
//all script and function on a web page can assess it



{
    let y = 11//this Block scope
}
function scope(params) {
    let z= '11'
}//Function Scope

//variable with  the same name can be use in different function

function a() {
    let x;
}

function b() {
    let x;
}

function c() {
    let x;
}

var car = 'v'
var car1 = 'v'
var car2 = 'v'

console.log(window)