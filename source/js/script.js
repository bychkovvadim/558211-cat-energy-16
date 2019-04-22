var map;
var positionMap = {lat: 59.938985, lng: 30.318867};
var positionMarker = {lat: 59.938708, lng: 30.323036};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: positionMap,
    zoom: 17,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var marker = new google.maps.Marker({
    position: positionMarker,
    icon: 'img/map-pin.png',
    map: map
  });
}
