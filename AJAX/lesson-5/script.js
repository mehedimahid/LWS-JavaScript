const getbutton = document.getElementById('get')
const sendbutton = document.getElementById('send')

function sendRequest(method, url, data){
   const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onload = function(){
         if (this.status >= 400) {
            reject(`
             There is an aplication error and the response status is ${this.status}`
            )
         } else {
            resolve(this.response)
         }
      }
      xhr.onerror = function () {
         reject('there is an error')
      }
      xhr.open(method, url)
      xhr.responseType = 'json'
      xhr.send(data)
   })
   return promise
   
}
function getData(){
   sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1')
   .then((responseData) => {
      console.log(responseData)
   }).catch((err) => {
      console.log(err)
   })
   
}
function sendData(){
   sendRequest('POST', 'https://jsonplaceholder.typicode.com/posts', JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
      })
   )
   .then((responseData) => {
      console.log(responseData)
   })
   .catch((err) => {
      console.log(err)
   })
}

getbutton.addEventListener('click', getData)
sendbutton.addEventListener('click', sendData)


