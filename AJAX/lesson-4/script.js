const demo = document.getElementById('demo')
function loadData(){
   
   const xhr = new XMLHttpRequest();
   xhr.onload = function() {
      
      demo.innerHTML = this.responseText
      // console.log(this.getAllResponseHeaders())
      console.log(this.getResponseHeader('date'))
   }
   
   xhr.open('GET', './Data/data.txt')  
   
   xhr.send()
  
}
