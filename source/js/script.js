var map;
var posicionMap = {lat: 59.938985, lng: 30.318867};
var posicionMarker = {lat: 59.938708, lng: 30.323036};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: posicionMap,
    zoom: 17,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var marker = new google.maps.Marker({
    position: posicionMarker,
    icon: 'img/map-pin.png',
    map: map
  });
}
