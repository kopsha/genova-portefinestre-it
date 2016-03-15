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
    if ($("#header-t")) {
        $("#header-t").load( "header-t.html" );
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
    if ($("#informazioni")) {
        $("#informazioni").load( "informazioni.html" );
    };
    if ($("#parteneri")) {
        $("#parteneri").load( "parteneri.html" );
    };
	if($("#carta")) {
        $("#carta").load( "carta.html" );
        google.maps.event.addDomListener(window, 'load', initializeMap);
    };
    if ($("#footer")) {
        $("#footer").load( "footer.html" );
    };
}

function initializeMap() {
    var mapCanvas = document.getElementById('map_canvas');
    var position = new google.maps.LatLng( 44.4256641,8.8510063 );
    var mapOptions = {
        center: position,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title:"Porte Finestre"
    });  

    // google.maps.event.addDomListener(window, 'load', initializeMap);
}
