// Initial map in your location
// For first time user inter the website
var mymap = L.map('mapid').setView([51.5, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicHJveGRoaXlhIiwiYSI6ImNrdjVpdmNpMTFrdjQydW92b3RleTZmcXQifQ.hIKGGvA2lGBDzf-bRqk3_Q'
}).addTo(mymap);


// Add mark
var marker = L.marker([51.5, -0.09]).addTo(mymap);
marker.bindPopup("<b>User Test</b><br>I am a popup.").openPopup();
