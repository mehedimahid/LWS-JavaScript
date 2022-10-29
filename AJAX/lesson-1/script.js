const demo = document.getElementById('demo')
function loadData(){
   //একটি নতুন request তৈরি 
   const xhr = new XMLHttpRequest();
   //রিকুয়েস্ট এলে কি করবেন
   xhr.onload = function() {
      demo.innerHTML = this.responseText
   }
   //prepare requst  Method: GET, POST, PUT,PATCH, DELETE ,OPTIONS
   xhr.open('GET', './Data/data.txt')
   //request sent
   xhr.send()
}