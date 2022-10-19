const displayLocation = document.getElementById('displayLocation')

function getLocation(){
    if (navigator.geolocation) {
        // navigator.geolocation.getCurrentPosition(showPosition, showError)
        navigator.geolocation.watchPosition(showPosition, showError)
    }else{
        displayLocation.innerText = 'Your browser did not suport Geolocation'
    }
}

function showPosition(position){
    displayLocation.innerHTML = 
    'Latitude: '
     + position.coords.latitude + 
     '</br>Longitude:'  + 
     position.coords.longitude
}

function showError(error){
    switch(error.code) {
        case error.PERMISSION_DENIED:
          displayLocation.innerHTML = "User denied the request for Geolocation."
          break;
        case error.POSITION_UNAVAILABLE:
          displayLocation.innerHTML = "Location information is unavailable."
          break;
        case error.TIMEOUT:
          displayLocation.innerHTML = "The request to get user location timed out."
          break;
        case error.UNKNOWN_ERROR:
          displayLocation.innerHTML = "An unknown error occurred."
          break;
      }
}