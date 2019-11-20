let map = L.map('map').setView([-5.1546, 119.4265], 15);
let marker = L.marker([-5.1546, 119.4265]).addTo(map);

marker.bindPopup("Rappocini");
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiamludXZpIiwiYSI6ImNrMzVtZHNiZzA5YXczY3IxNm84dTJ4ejMifQ.JUkChknFcL13Wo-I0mqk5Q'
}).addTo(map);