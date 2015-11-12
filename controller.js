angular.module('myApp',[]).controller('mapCtrl', function($scope){
	
	var mapOptions = {
		zoom: 4;

		//center of the us
		center: new google.maps.LatLng(40.000,-98.0000),
		// mapTypeId: google.maps.MaptTypeId.TERRAIN
	}


	$scope.map = new google.maps.Map($('#map'), mapOptions);
	$scope.markers = [];

	var infoWindow = new google.maps.InfoWindow();


});