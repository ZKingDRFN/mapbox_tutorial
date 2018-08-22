mapboxgl.accessToken = 'pk.eyJ1IjoicG9pbnRzbm9ydGgiLCJhIjoiY2l6azZqc2R4MDJ6bzJxb2QwMHFkOGtiaSJ9.5BkL6zVbekl1hCbDy1vbCA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [-74.50, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
