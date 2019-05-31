
function initMap() {
    // Your location
    const loc = {lat: 6.445261, lng: 3.418092}; 

    // DOM manipulation
    const map = new google.maps.Map(document.querySelector('.map'), 
    {
        zoom: 8,
        center: loc
  });
    
    const marker = new google.maps.Marker({ position: loc, map: map
    });
}