
const map = L.map('map').setView([37.8, -96], 4);
const accessToken = 'pk.eyJ1Ijoic2FuZGVyZGoiLCJhIjoiY2pzejBlMWh3MThybTRhb2RiMXFodDdyNSJ9.-Nm4Q0ksZ4geOwro6bUnmw'

//adds the open street map layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + accessToken, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: accessToken
}).addTo(map);

L.geoJson(statesData).addTo(map);

