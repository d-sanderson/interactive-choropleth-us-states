
const map = L.map('map').setView([37.8, -96], 4);
const accessToken = 'pk.eyJ1Ijoic2FuZGVyZGoiLCJhIjoiY2pzejBlMWh3MThybTRhb2RiMXFodDdyNSJ9.-Nm4Q0ksZ4geOwro6bUnmw'

//adds the open street map layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + accessToken, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: accessToken
}).addTo(map);

//L.geoJson(statesData).addTo(map);

function getColor(d) {
    return d > 1000 ? '#fff7fb' :
           d > 500  ? '#ece7f2' :
           d > 200  ? '#d0d1e6' :
           d > 100  ? '#a6bddb' :
           d > 50   ? '#74a9cf' :
           d > 20   ? '#3690c0' :
           d > 10   ? '#0570b0' :
                      '#034e7b';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };

   
}



function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color:'#666',
        dashArray: '',
        fillOpacity: 0.7

    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringtoFront();
    }
}

let geojson;

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);