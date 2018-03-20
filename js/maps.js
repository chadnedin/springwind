$(document).ready(function(){
	var geocoder = new google.maps.Geocoder();
	//setting the location for 1428 Elm Street Los Angeles, CA USA with the Longat
	var myLatLng = new google.maps.LatLng(34.0978058,-118.2358274);
	geocoder.geocode({location: myLatLng}, function(results) {
	var mapOptions = {zoom: 8, center: myLatLng, mapTypeId: google.maps.MapTypeId.ROADMAP}
	var map = new google.maps.Map($("#map").get(0), mapOptions);
	var marker = new google.maps.Marker( {
	position: myLatLng,
	map: map

});
//adds message
var infoWindow = new google.maps.InfoWindow({
content: "<h3>Welcome to Our Store Headquarters Located here at 1428 Elm Street Los Angeles, CA. USA</h3>"
});
infoWindow.open(map, marker);
});
});
