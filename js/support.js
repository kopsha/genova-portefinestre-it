$( document ).ready(function() {
    importHtml();
});


function importHtml(){
	if( $("#header") ){
		$("#header").load( "header.html" );
	};
	if ( $("#footer") ) {
		$("#footer").load( "footer.html" );
	};
	if($("#map")){
        initialize();
	}
}

 function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(46.770480, 23.586600),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      
      google.maps.event.addDomListener(window, 'load', initialize);
}