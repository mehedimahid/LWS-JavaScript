const demo = document.getElementById('demo')
function loadData(){
   
   const xhr = new XMLHttpRequest();
   xhr.onload = function() {
      console.log('Finish Request')////true থাকলে পরে আসবে ।false থাকলে ১ম আসবে 
      demo.innerHTML = this.responseText
   }
   
   xhr.open('GET', './Data/data.txt',false)  //when true this file work in async system & when  false  this file work in sync system
   
   xhr.send()
   console.log('hello')//true থাকলে ১ম আসবে । থাকলে পরে আসবে 
}
