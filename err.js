try {
    addfdf('Welcome')
} catch (err) {
    console.log(err.message)
}

function myFunction(value) {
  
  let num = value;
  try {
    if (num == "") throw{
      message: 'Empty value',
      name:'Empty'
    };
    if (isNaN(num)) throw "There is no value";
  } 
  catch (err) {
    console.log(err);
  }finally{
    console.log('This is a test')
  }
}

myFunction('');


