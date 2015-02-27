var map;
var zips = [];
var labels = [];
var pins = [];
var center = new google.maps.LatLng(32.717741, -117.155588);
var baseZoom = 11;

function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: new google.maps.LatLng(32.717741, -117.155588),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
    }
    var tempMap = new google.maps.Map(mapCanvas, mapOptions);
    map = tempMap;


    map.set('styles', [
    	{
    		featureType: 'all',
    		elementType: 'geometry',
    		stylers: [
    			{ saturation: -10}
    		]
    	}
    ]);

    //createBoundaries();
    //createPins();
}

function createPins() {
	console.log('hi');
	var image = {
		url: 'css/images/beepi_iso.png',
		scaledSize: new google.maps.Size(32, 32),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(16, 16),
	};
	console.log(image);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(32.684878, -117.166489),
		map: null,
		title: 'Beepi Launch Party!',
		icon: image,
	});
	console.log(marker);
	pins[pins.length] = marker;
}


function createBoundaries() {
	var countCoords;
	countyCoords = [
	 	new google.maps.LatLng(32.684783, -117.223662),
	 	new google.maps.LatLng(32.703369, -117.224252),
	 	new google.maps.LatLng(32.710880, -117.216528),
	 	new google.maps.LatLng(32.711891, -117.189233),
	 	new google.maps.LatLng(32.697302, -117.167604),
	 	new google.maps.LatLng(32.678665, -117.176702),
	 	new google.maps.LatLng(32.684783, -117.223662),
	]
	var poly = new google.maps.Polygon({
		paths: countyCoords,
		strokeColor: '009BFF',
		strokeOpacity: 1,
		strokeWeight: 2,
		fillColor: '#009BFF',
		fillOpacity: .6,
		zIndex: 500,
	});
	zips[zips.length] = poly;
	
	var mapLabel = new MapLabel({
		text: "90211",
		position: new google.maps.LatLng(32.698917, -117.198184),
		fontSize: 0,
		map: map,
		zIndex: 1000,
		strokeColor: "#000000",
		strokeWeight: 3,
		fontColor: "#00BD6F",
	});
	labels[labels.length] = mapLabel

	countyCoords = [
	 	new google.maps.LatLng(32.719330, -117.102373),
	 	new google.maps.LatLng(32.740413, -117.111986),
	 	new google.maps.LatLng(32.756872, -117.109239),
	 	new google.maps.LatLng(32.777946, -117.112672),
	 	new google.maps.LatLng(32.779390, -117.064264),
	 	new google.maps.LatLng(32.772014, -117.027408),
	 	new google.maps.LatLng(32.777211, -117.004748),
	 	new google.maps.LatLng(32.760755, -117.004405),
	 	new google.maps.LatLng(32.747474, -117.018138),
	 	new google.maps.LatLng(32.719330, -117.102373),
	]
	var poly = new google.maps.Polygon({
		paths: countyCoords,
		strokeColor: '009BFF',
		strokeOpacity: 1,
		strokeWeight: 2,
		fillColor: '#009BFF',
		fillOpacity: .6,
		zIndex: 500,
	});
	zips[zips.length] = poly;
	
	var mapLabel = new MapLabel({
		text: "90482",
		position: new google.maps.LatLng(32.757002, -117.069293),
		fontSize: 0,
		map: map,
		zIndex: 1000,
		strokeColor: "#000000",
		strokeWeight: 3,
		fontColor: "#00BD6F",
	});
	labels[labels.length] = mapLabel

	countyCoords = [
	 	new google.maps.LatLng(32.649401, -117.103574),
	 	new google.maps.LatLng(32.656628, -117.072332),
	 	new google.maps.LatLng(32.635235, -117.048814),
	 	new google.maps.LatLng(32.615718, -117.038858),
	 	new google.maps.LatLng(32.606319, -117.037313),
	 	new google.maps.LatLng(32.602306, -117.064693),
	 	new google.maps.LatLng(32.604692, -117.089841),
	 	new google.maps.LatLng(32.649401, -117.103574),
	]
	var poly = new google.maps.Polygon({
		paths: countyCoords,
		strokeColor: '009BFF',
		strokeOpacity: 1,
		strokeWeight: 2,
		fillColor: '#009BFF',
		fillOpacity: .6,
		zIndex: 500,
	});
	zips[zips.length] = poly;
	
	var mapLabel = new MapLabel({
		text: "90315",
		position: new google.maps.LatLng(32.617561, -117.066753),
		fontSize: 0,
		map: map,
		zIndex: 1000,
		strokeColor: "#000000",
		strokeWeight: 3,
		fontColor: "#00BD6F",
	});
	labels[labels.length] = mapLabel
}

function showZipCodes() {
	map.setCenter(center);
	map.setZoom(baseZoom)
	for (var i = 0; i < zips.length; i++) {
		zips[i].setMap(map);
		labels[i].set('fontSize', 20);
	}
}

function clearZips() {
	for (var i = 0; i < zips.length; i++) {
		zips[i].setMap(null);
		labels[i].set('fontSize', 0);
	}
}

function showPins() {
	if (pins[0]) {
		map.setCenter(pins[0].position);
		map.setZoom(13);
	}
	for (var i = 0; i < pins.length; i++) {
		pins[i].setMap(map);
		console.log(pins[i]);
	}
}

function clearPins() {
	for (var i = 0; i < pins.length; i++) {
		pins[i].setMap(null);
	}
}