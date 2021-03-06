const MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
  this.moveMap = this.moveMap.bind(this);
};

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);
};

MapWrapper.prototype.addClickEvent = function () {
  this.googleMap.addListener("click", function (event) {
    const position = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    this.addMarker(position);
  }.bind(this));
};

MapWrapper.prototype.bounceMarkers = function () {
  this.markers.forEach(function (marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });
};

MapWrapper.prototype.moveMap = function (coordinateObject) {
  this.googleMap.panTo(coordinateObject);
};
