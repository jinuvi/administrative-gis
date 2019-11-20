let map = L.map('map').setView([-5.1546, 119.4265], 16);
let pict = document.getElementById('pict');
let title = document.getElementById('title');
let desc = document.getElementById('desc');
let type = document.getElementById('type');
let circleMarker = L.divIcon({
    className: 'circle'
})
let bankMarker = L.divIcon({
    className: 'bank'
})
let kantorPolisiMarker = L.divIcon({
    className: 'kantorPolisi'
})
let makamMarker = L.divIcon({
    className: 'makam'
})
let pemerintahanMarker = L.divIcon({
    className: 'pemerintahan'
})
let pemukimanMarker = L.divIcon({
    className: 'pemukiman'
})
let penginapanMarker = L.divIcon({
    className: 'penginapan'
})
let perguruanTinggiMarker = L.divIcon({
    className: 'perguruanTinggi'
})
let rumahSakitMarker = L.divIcon({
    className: 'rumahSakit'
})
let sekolahMarker = L.divIcon({
    className: 'sekolah'
})
let spbuMarker = L.divIcon({
    className: 'spbu'
})
let tempatIbadahMarker = L.divIcon({
    className: 'tempatIbadah'
})
let travelMarker = L.divIcon({
    className: 'travel'
})
let saranaOlahragaMarker = L.divIcon({
    className: 'saranaOlahraga'
})

let markCirc = L.marker([-5.1546, 119.4265], {
    icon: circleMarker
}).addTo(map).bindPopup('Rappocini');
markCirc.on('click', function (e) {

});



let streetMap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiamludXZpIiwiYSI6ImNrMzVtZHNiZzA5YXczY3IxNm84dTJ4ejMifQ.JUkChknFcL13Wo-I0mqk5Q'
});

let darkMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
});

darkMap.addTo(map);

(async () => {
    try {
        let resp = await fetch('../data/data.json');
        let data = await resp.json();
        localStorage.setItem('data', JSON.stringify(data.places))
    } catch (error) {
        console.log(error);
    }
})();

let places = JSON.parse(localStorage.getItem('data'));

var all = []
var bank = []
var kantorPolisi = []
var makam = []
var pemerintahan = []
var pemukiman = []
var penginapan = []
var perguruanTinggi = []
var rumahSakit = []
var sekolah = []
var spbu = []
var tempatIbadah = []
var travel = []
var saranaOlahraga = []

places.forEach(element => {
    var mark = L.marker(element.cord, {
        icon: circleMarker
    }).bindPopup('<p><b>' + element.title + '</b></p>' + element.desc);
    mark.on('click', show);
    all.push(mark);
});

for (var p of places) {
    switch (p.type) {
        case "Bank":
            var point = L.marker(p.cord, {
                icon: bankMarker
            }).bindPopup('<p><b>' + p.title + '</b></p>' + p.desc);
            point.on('click', show);
            bank.push(point)
            break;
        case "Kantor Polisi":
            var point = L.marker(p.cord, {
                icon: kantorPolisiMarker
            }).bindPopup('<p><b>' + p.title + '</b></p>' + p.desc);
            point.on('click', show);
            kantorPolisi.push(point)
            break;
        case "Makam":
            var point = L.marker(p.cord, {
                icon: makamMarker
            }).bindPopup('<p><b>' + p.title + '</b></p>' + p.desc);
            point.on('click', show);
            makam.push(point)
            break;
        case "Pemerintahan":
            var point = L.marker(p.cord, {
                icon: pemerintahanMarker
            }).bindPopup('<p><b>' + p.title + '</b></p>' + p.desc);
            point.on('click', show);
            pemerintahan.push(point)
            break;
        case "Pemukiman":
            var point = L.marker(p.cord, {
                icon: pemukimanMarker
            }).bindPopup('<p><b>' + p.title + '</b></p>' + p.desc);
            point.on('click', show);
            pemukiman.push(point)
            break;
        case "Penginapan":
            var point = L.marker(p.cord, {
                icon: penginapanMarker
            }).bindPopup('<p><b>' + p.title + '</b></p>' + p.desc);
            point.on('click', show);
            penginapan.push(point)
            break;
        case "Perguruan Tinggi":
            var point = L.marker(p.cord, {
                icon: perguruanTinggiMarker
            }).bindPopup('<p><b>' + p.title + '</b></p>' + p.desc);
            point.on('click', show);
            perguruanTinggi.push(point)
            break;
        case "Rumah Sakit":
            var point = L.marker(p.cord, {
                icon: rumahSakitMarker
            }).bindPopup('<p><b>' + p.title + '</b></p>' + p.desc);
            point.on('click', show);
            rumahSakit.push(point)
            break;
        case "Sekolah":
            var point = L.marker(p.cord, {
                icon: sekolahMarker
            }).bindPopup('<p><b>' + p.title + '</b></p>' + p.desc);
            point.on('click', show);
            sekolah.push(point)
            break;
        case "SPBU":
            var point = L.marker(p.cord, {
                icon: spbuMarker
            }).bindPopup('<p><b>' + p.title + '</b></p>' + p.desc);
            point.on('click', show);
            spbu.push(point)
            break;
        case "Tempat Ibadah":
            var point = L.marker(p.cord, {
                icon: tempatIbadahMarker
            }).bindPopup('<p><b>' + p.title + '</b></p>' + p.desc);
            point.on('click', show);
            tempatIbadah.push(point)
            break;
        case "Travel":
            var point = L.marker(p.cord, {
                icon: travelMarker
            }).bindPopup('<p><b>' + p.title + '</b></p>' + p.desc);
            point.on('click', show);
            travel.push(point)
            break;
        case "Sarana Olahraga":
            var point = L.marker(p.cord, {
                icon: saranaOlahragaMarker
            }).bindPopup('<p><b>' + p.title + '</b></p>' + p.desc);
            point.on('click', show);
            saranaOlahraga.push(point)
            break;
        default:
            break;
    }
}

var overlay = {
    "All": L.layerGroup(all),
    "Bank": L.layerGroup(bank),
    "Kantor Polisi": L.layerGroup(kantorPolisi),
    "Makam": L.layerGroup(makam),
    "Pemerintahan": L.layerGroup(pemerintahan),
    "Pemukiman": L.layerGroup(pemukiman),
    "Penginapan": L.layerGroup(penginapan),
    "Perguruan Tinggi": L.layerGroup(perguruanTinggi),
    "Rumah Sakit": L.layerGroup(rumahSakit),
    "Sekolah": L.layerGroup(sekolah),
    "SPBU": L.layerGroup(spbu),
    "Tempat Ibadah": L.layerGroup(tempatIbadah),
    "Travel": L.layerGroup(travel),
    "Sarana Olahraga": L.layerGroup(saranaOlahraga)
}

L.control.layers(null, overlay).addTo(map)

function show(params) {
    let i = getLocation(params.latlng.lat, params.latlng.lng);
    if (i > null) {
        pict.src = places[i].pict;
        title.innerText = places[i].title;
        desc.innerText = places[i].desc;
        type.innerText = places[i].type;
    }
}

function getLocation(x, y) {
    for (let i = 0; i < places.length; i++) {
        if (places[i].cord[0] == x && places[i].cord[1] == y) {
            return i;
        }
    }
    return 0;
}