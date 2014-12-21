var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var inicio = new google.maps.LatLng(40.4378271, -3.6795367);
  var mapOptions = {
    zoom: 6,
    center: inicio
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);


  var image = 'iconos/github.png';

  /******************************************************A*/
  var alava = new google.maps.LatLng(42.8446121, -2.759727);
  var alavaG = new google.maps.Marker({
    position: alava,
    map: map,
    icon: image
  });

  google.maps.event.addListener(alavaG, 'click', function() {
    $("#ciudad").hide(500);

    $.get( "../top-github-users-data/formatted/top-Alava.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);


  });



  var albacete = new google.maps.LatLng(38.9921992, -1.8605894);
  var albaceteG = new google.maps.Marker({
    position: albacete,
    map: map,
    icon: image
  });

  google.maps.event.addListener(albaceteG, 'click', function() {
    $(".ciudades").hide(500);
    $("#albacete").show(500);
  });



  var alicante = new google.maps.LatLng(38.3578408, -0.4725241);
  var alicanteG = new google.maps.Marker({
    position: alicante,
    map: map,
    icon: image
  });

  google.maps.event.addListener(alicanteG, 'click', function() {
    $(".ciudades").hide(500);
    $("#alicante").show(500);
  });



  var almeria = new google.maps.LatLng(36.8415281,-2.4571166);
  var almeriaG = new google.maps.Marker({
    position: almeria,
    map: map,
    icon: image
  });

  google.maps.event.addListener(almeriaG, 'click', function() {
    $(".ciudades").hide(500);
    $("#almeria").show(500);
  });



  var asturias = new google.maps.LatLng(43.2745375, -5.8465416);
  var asturiasG = new google.maps.Marker({
    position: asturias,
    map: map,
    icon: image
  });

  google.maps.event.addListener(asturiasG, 'click', function() {
    $(".ciudades").hide(500);
    $("#asturias").show(500);
  });



  var avila = new google.maps.LatLng(40.6568861, -4.6821937);
  var avilaG = new google.maps.Marker({
    position: avila,
    map: map,
    icon: image
  });

  google.maps.event.addListener(avilaG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });


  /******************************************************B*/
  var badajoz = new google.maps.LatLng(38.8793801, -6.9876791);
  var badajozG = new google.maps.Marker({
    position: badajoz,
    map: map,
    icon: image
  });

  google.maps.event.addListener(badajozG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });



  var barcelona = new google.maps.LatLng(41.39479, 2.1487679);
  var barcelonaG = new google.maps.Marker({
    position: barcelona,
    map: map,
    icon: image
  });

  google.maps.event.addListener(barcelonaG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });



  var burgos = new google.maps.LatLng(42.344126, -3.6946931);
  var burgosG = new google.maps.Marker({
    position: burgos,
    map: map,
    icon: image
  });

  google.maps.event.addListener(burgosG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });


  /******************************************************C*/
  var caceres = new google.maps.LatLng(39.4716366, -6.3907192);
  var caceresG = new google.maps.Marker({
    position: caceres,
    map: map,
    icon: image
  });

  google.maps.event.addListener(caceresG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });


  var cadiz = new google.maps.LatLng(36.5163864, -6.2824671);
  var cadizG = new google.maps.Marker({
    position: cadiz,
    map: map,
    icon: image
  });

  google.maps.event.addListener(cadizG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });



  var cantabria = new google.maps.LatLng(43.1358713, -4.0007151);
  var cantabriaG = new google.maps.Marker({
    position: cantabria,
    map: map,
    icon: image
  });

  google.maps.event.addListener(cantabriaG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });



  var castellon = new google.maps.LatLng(39.9874595, -0.048063);
  var castellonG = new google.maps.Marker({
    position: castellon,
    map: map,
    icon: image
  });

  google.maps.event.addListener(castellonG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });



  var ciudadReal = new google.maps.LatLng(38.9860438, -3.926988);
  var ciudadRealG = new google.maps.Marker({
    position: ciudadReal,
    map: map,
    icon: image
  });

  google.maps.event.addListener(ciudadRealG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });



  var cordoba = new google.maps.LatLng(37.891586, -4.7844853);
  var cordobaG = new google.maps.Marker({
    position: cordoba,
    map: map,
    icon: image
  });

  google.maps.event.addListener(cordobaG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });



  var coruna = new google.maps.LatLng(43.3618742,-8.4126837);
  var corunaG = new google.maps.Marker({
    position: coruna,
    map: map,
    icon: image
  });

  google.maps.event.addListener(corunaG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });



  /******************************************************G*/
  var gerona = new google.maps.LatLng(41.9964538,2.7647881);
  var geronaG = new google.maps.Marker({
    position: gerona,
    map: map,
    icon: image
  });

  google.maps.event.addListener(geronaG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });




  var granada = new google.maps.LatLng(37.1809462,-3.5922032);
  var granadaG = new google.maps.Marker({
    position: granada,
    map: map,
    icon: image
  });

  google.maps.event.addListener(granadaG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });



  var guadalajara = new google.maps.LatLng(40.6321901,-3.1731725);
  var guadalajaraG = new google.maps.Marker({
    position: guadalajara,
    map: map,
    icon: image
  });

  google.maps.event.addListener(guadalajaraG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });



  var guipuzcoa = new google.maps.LatLng(43.1454624,-2.1660136);
  var guipuzcoaG = new google.maps.Marker({
    position: guipuzcoa,
    map: map,
    icon: image
  });

  google.maps.event.addListener(guipuzcoaG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });



  /******************************************************H*/
  var huelva = new google.maps.LatLng(37.2708679,-6.9396903);
  var huelvaG = new google.maps.Marker({
    position: huelva,
    map: map,
    icon: image
  });

  google.maps.event.addListener(huelvaG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });




  var huesca = new google.maps.LatLng( 42.1359064,-0.4058484);
  var huescaG = new google.maps.Marker({
    position: huesca,
    map: map,
    icon: image
  });

  google.maps.event.addListener(huescaG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });





  /******************************************************I*/
  var baleares = new google.maps.LatLng(39.5416377,2.8909253);
  var balearesG = new google.maps.Marker({
    position: baleares,
    map: map,
    icon: image
  });

  google.maps.event.addListener(balearesG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });




  /******************************************************J*/
  var jaen = new google.maps.LatLng(37.7800943,-3.796865);
  var jaenG = new google.maps.Marker({
    position: jaen,
    map: map,
    icon: image
  });

  google.maps.event.addListener(jaenG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });


  /******************************************************L*/

  var leon = new google.maps.LatLng(42.6036057,-5.5773913);
  var leonG = new google.maps.Marker({
    position: leon,
    map: map,
    icon: image
  });

  google.maps.event.addListener(leonG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });




  var lerida = new google.maps.LatLng(41.6183423,0.6199348);
  var leridaG = new google.maps.Marker({
    position: lerida,
    map: map,
    icon: image
  });

  google.maps.event.addListener(leridaG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });




  var lugo = new google.maps.LatLng(43.0122837,-7.5565001);
  var lugoG = new google.maps.Marker({
    position: lugo,
    map: map,
    icon: image
  });

  google.maps.event.addListener(lugoG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });


  /******************************************************M*/
  var madrid = new google.maps.LatLng(40.4378271,-3.6795366);
  var madridG = new google.maps.Marker({
    position: madrid,
    map: map,
    icon: image
  });

  google.maps.event.addListener(madridG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });



  var malaga = new google.maps.LatLng(36.718222,-4.4492669);
  var malagaG = new google.maps.Marker({
    position: malaga,
    map: map,
    icon: image
  });

  google.maps.event.addListener(malagaG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });




  var murcia = new google.maps.LatLng(37.9886177,-1.13004);
  var murciaG = new google.maps.Marker({
    position: murcia,
    map: map,
    icon: image
  });

  google.maps.event.addListener(murciaG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });



  /******************************************************N*/
  var navarra = new google.maps.LatLng(42.6123428,-1.6120166);
  var navarraG = new google.maps.Marker({
    position: navarra,
    map: map,
    icon: image
  });

  google.maps.event.addListener(navarraG, 'click', function() {
    $(".ciudades").hide(500);
    $("#avila").show(500);
  });



}
