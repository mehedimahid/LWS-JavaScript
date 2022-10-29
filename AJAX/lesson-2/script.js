const demo = document.getElementById('demo')
const demo2 = document.getElementById('demo2')
function loadData(callBackFunction){
   //একটি নতুন request তৈরি 
   const xhr = new XMLHttpRequest();
   //রিকুয়েস্ট এলে কি করবেন
   xhr.onload = function() {
      callBackFunction(this)
   }
   //prepare requst  Method: GET, POST, PUT,PATCH, DELETE ,OPTIONS
   xhr.open('GET', './Data/data.txt')
   //request sent
   xhr.send()
}

function myCallbackF(xhr){
   demo.innerHTML = xhr.responseText
}

function myCallbackF2(xhr){
   demo2.innerHTML = xhr.responseText
}

