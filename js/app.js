// Declare elements
const Ip = document.getElementById('ip');
const Location = document.getElementById('location');
const Timezone = document.getElementById('timezone');
const Utc = document.getElementById('utc');


// create map
var mymap = L.map('mapid');


// create tile layer for map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicHJveGRoaXlhIiwiYSI6ImNrdjVpdmNpMTFrdjQydW92b3RleTZmcXQifQ.hIKGGvA2lGBDzf-bRqk3_Q'
}).addTo(mymap);


// handle data from fetch
function handleData({ ip, location, isp }) {
	// Write the data in the bord
	Ip.innerText = ip;
	Location.innerText = `${location.city}, ${location.country}`;
	Timezone.innerText = `UTC${location.timezone}`;
	Utc.innerText = isp;

	// set map vu
	mymap.setView([location.lat, location.lng], 14);

	// set map mark
	var marker = L.marker([location.lat, location.lng]).addTo(mymap);
	marker.bindPopup(`<b>Location</b><br><b>Lat:</b> ${location.lat}, <b>Lng:</b> ${location.lng}.`).openPopup();
}


// fetch data function
function fetchIp(ip = '') {
  if (ip) {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_fz3e43ym5SC8fMxsDzwHC6PxBLzab&ipAddress=${ip}`)
      .then(response => response.json())
      .then(handleData);
  }
  else {
		fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_fz3e43ym5SC8fMxsDzwHC6PxBLzab&ipAddress`)
      .then(response => response.json())
      .then(handleData);
	}
}


// reset bord
function resetBord() {
	Ip.innerText = 'Nan';
	Location.innerText = 'Nan';
	Timezone.innerText = 'Nan';
	Utc.innerText = 'Nan';
}


// run and fatch auto for first time user 
fetchIp();


// run and fetch for the user search
const searchInput = document.querySelector('.input-section--form > input[type="text"]');
const searchBtn = document.getElementById('submit-btn');
searchBtn.addEventListener(
	'click', function() {
		if(searchInput.value) {
			resetBord();
			if(searchInput.value === 'www.')

			fetchIp(searchInput.value);
		}
	}
);
