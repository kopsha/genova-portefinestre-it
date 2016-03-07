$( document ).ready(function() {
   /* $("#example-vertical").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        stepsOrientation: "vertical"
    });
    */
    
    importHtml();
});


function importHtml()
{
    if ($("#header")) {
        $("#header").load( "header.html" );
    };
    if ($("#menubar")) {
        $("#menubar").load( "menubar.html" );
    };
    if ($("#prodotti")) {
        $("#prodotti").load( "prodotti.html" );
    };
    if ($("#garanzia")) {
        $("#garanzia").load( "garanzia.html" );
    };
	if ($("#footer")) {
		$("#footer").load( "footer.html" );
	};
	if($("#map")) {
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
