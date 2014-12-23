var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

var dir="../../top-github-users-data-spain/formatted/";

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
    $.get( dir+"top-Álava.html", function( data ) {
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
    $("#ciudad").hide(500);
    $.get( dir+"top-Albacete.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var alicante = new google.maps.LatLng(38.3578408, -0.4725241);
  var alicanteG = new google.maps.Marker({
    position: alicante,
    map: map,
    icon: image
  });

  google.maps.event.addListener(alicanteG, 'click', function() {
    $("#ciudad").hide(500);
    $.get( dir+"top-Alicante.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var almeria = new google.maps.LatLng(36.8415281,-2.4571166);
  var almeriaG = new google.maps.Marker({
    position: almeria,
    map: map,
    icon: image
  });

  google.maps.event.addListener(almeriaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Almería.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var asturias = new google.maps.LatLng(43.2745375, -5.8465416);
  var asturiasG = new google.maps.Marker({
    position: asturias,
    map: map,
    icon: image
  });

  google.maps.event.addListener(asturiasG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"formatted/top-Asturias.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var avila = new google.maps.LatLng(40.6568861, -4.6821937);
  var avilaG = new google.maps.Marker({
    position: avila,
    map: map,
    icon: image
  });

  google.maps.event.addListener(avilaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Ávila.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  /******************************************************B*/
  var badajoz = new google.maps.LatLng(38.8793801, -6.9876791);
  var badajozG = new google.maps.Marker({
    position: badajoz,
    map: map,
    icon: image
  });

  google.maps.event.addListener(badajozG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Badajoz.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var barcelona = new google.maps.LatLng(41.39479, 2.1487679);
  var barcelonaG = new google.maps.Marker({
    position: barcelona,
    map: map,
    icon: image
  });

  google.maps.event.addListener(barcelonaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Barcelona.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var burgos = new google.maps.LatLng(42.344126, -3.6946931);
  var burgosG = new google.maps.Marker({
    position: burgos,
    map: map,
    icon: image
  });

  google.maps.event.addListener(burgosG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Burgos.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  /******************************************************C*/
  var caceres = new google.maps.LatLng(39.4716366, -6.3907192);
  var caceresG = new google.maps.Marker({
    position: caceres,
    map: map,
    icon: image
  });

  google.maps.event.addListener(caceresG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Cáceres.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  var cadiz = new google.maps.LatLng(36.5163864, -6.2824671);
  var cadizG = new google.maps.Marker({
    position: cadiz,
    map: map,
    icon: image
  });

  google.maps.event.addListener(cadizG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Cádiz.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var cantabria = new google.maps.LatLng(43.1358713, -4.0007151);
  var cantabriaG = new google.maps.Marker({
    position: cantabria,
    map: map,
    icon: image
  });

  google.maps.event.addListener(cantabriaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Cantabria.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var castellon = new google.maps.LatLng(39.9874595, -0.048063);
  var castellonG = new google.maps.Marker({
    position: castellon,
    map: map,
    icon: image
  });

  google.maps.event.addListener(castellonG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Castellón.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var ciudadReal = new google.maps.LatLng(38.9860438, -3.926988);
  var ciudadRealG = new google.maps.Marker({
    position: ciudadReal,
    map: map,
    icon: image
  });

  google.maps.event.addListener(ciudadRealG, 'click', function() {
    $("#ciudad").hide(500);
    $.get( dir+"top-Ciudad Real.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var cordoba = new google.maps.LatLng(37.891586, -4.7844853);
  var cordobaG = new google.maps.Marker({
    position: cordoba,
    map: map,
    icon: image
  });

  google.maps.event.addListener(cordobaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Córdoba.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var coruna = new google.maps.LatLng(43.3618742,-8.4126837);
  var corunaG = new google.maps.Marker({
    position: coruna,
    map: map,
    icon: image
  });

  google.maps.event.addListener(corunaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get( dir+"top-Coruña.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  /******************************************************G*/
  var gerona = new google.maps.LatLng(41.9964538,2.7647881);
  var geronaG = new google.maps.Marker({
    position: gerona,
    map: map,
    icon: image
  });

  google.maps.event.addListener(geronaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get( dir+"top-Girona.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });




  var granada = new google.maps.LatLng(37.1809462,-3.5922032);
  var granadaG = new google.maps.Marker({
    position: granada,
    map: map,
    icon: image
  });

  google.maps.event.addListener(granadaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Granada.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var guadalajara = new google.maps.LatLng(40.6321901,-3.1731725);
  var guadalajaraG = new google.maps.Marker({
    position: guadalajara,
    map: map,
    icon: image
  });

  google.maps.event.addListener(guadalajaraG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Guadalajara.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var guipuzcoa = new google.maps.LatLng(43.1454624,-2.1660136);
  var guipuzcoaG = new google.maps.Marker({
    position: guipuzcoa,
    map: map,
    icon: image
  });

  google.maps.event.addListener(guipuzcoaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get( dir+"top-Guipuzcoa.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  /******************************************************H*/
  var huelva = new google.maps.LatLng(37.2708679,-6.9396903);
  var huelvaG = new google.maps.Marker({
    position: huelva,
    map: map,
    icon: image
  });

  google.maps.event.addListener(huelvaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Huelva.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });




  var huesca = new google.maps.LatLng( 42.1359064,-0.4058484);
  var huescaG = new google.maps.Marker({
    position: huesca,
    map: map,
    icon: image
  });

  google.maps.event.addListener(huescaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Huesca.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });





  /******************************************************I*/
  var baleares = new google.maps.LatLng(39.5416377,2.8909253);
  var balearesG = new google.maps.Marker({
    position: baleares,
    map: map,
    icon: image
  });

  google.maps.event.addListener(balearesG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Baleares.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });




  /******************************************************J*/
  var jaen = new google.maps.LatLng(37.7800943,-3.796865);
  var jaenG = new google.maps.Marker({
    position: jaen,
    map: map,
    icon: image
  });

  google.maps.event.addListener(jaenG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Jaén.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  /******************************************************L*/

  var leon = new google.maps.LatLng(42.6036057,-5.5773913);
  var leonG = new google.maps.Marker({
    position: leon,
    map: map,
    icon: image
  });

  google.maps.event.addListener(leonG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-León.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });




  var lerida = new google.maps.LatLng(41.6183423,0.6199348);
  var leridaG = new google.maps.Marker({
    position: lerida,
    map: map,
    icon: image
  });

  google.maps.event.addListener(leridaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Lerida.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });




  var lugo = new google.maps.LatLng(43.0122837,-7.5565001);
  var lugoG = new google.maps.Marker({
    position: lugo,
    map: map,
    icon: image
  });

  google.maps.event.addListener(lugoG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Lugo.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  /******************************************************M*/
  var madrid = new google.maps.LatLng(40.4378271,-3.6795366);
  var madridG = new google.maps.Marker({
    position: madrid,
    map: map,
    icon: image
  });

  google.maps.event.addListener(madridG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Madrid.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var malaga = new google.maps.LatLng(36.718222,-4.4492669);
  var malagaG = new google.maps.Marker({
    position: malaga,
    map: map,
    icon: image
  });

  google.maps.event.addListener(malagaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Málaga.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });




  var murcia = new google.maps.LatLng(37.9886177,-1.13004);
  var murciaG = new google.maps.Marker({
    position: murcia,
    map: map,
    icon: image
  });

  google.maps.event.addListener(murciaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get( dir+"top-Murcia.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  /******************************************************N*/
  var navarra = new google.maps.LatLng(42.6123428,-1.6120166);
  var navarraG = new google.maps.Marker({
    position: navarra,
    map: map,
    icon: image
  });

  google.maps.event.addListener(navarraG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Navarra.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  /******************************************************O*/
  var orense = new google.maps.LatLng(42.3383626,-7.8636856);
  var orenseG = new google.maps.Marker({
    position: orense,
    map: map,
    icon: image
  });

  google.maps.event.addListener(orenseG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Orense.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  /******************************************************P*/
  var palencia = new google.maps.LatLng(42.0088161,-4.5269538);
  var palenciaG = new google.maps.Marker({
    position: palencia,
    map: map,
    icon: image
  });

  google.maps.event.addListener(palenciaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Palencia.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var palmas = new google.maps.LatLng( 28.1173608,-15.439617);
  var palmasG = new google.maps.Marker({
    position: palmas,
    map: map,
    icon: image
  });

  google.maps.event.addListener(palmasG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Las Palmas.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  var pontevedra = new google.maps.LatLng(42.4338608,-8.6393456);
  var pontevedraG = new google.maps.Marker({
    position: pontevedra,
    map: map,
    icon: image
  });

  google.maps.event.addListener(pontevedraG, 'click', function() {
    $("#ciudad").hide(500);
    $.get( dir+"top-Pontevedra.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  /******************************************************R*/
  var rioja = new google.maps.LatLng(42.2816493,-2.4064864);
  var riojaG = new google.maps.Marker({
    position: rioja,
    map: map,
    icon: image
  });

  google.maps.event.addListener(riojaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Rioja.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  /******************************************************S*/
  var salamanca = new google.maps.LatLng(40.9634385,-5.6692121);
  var salamancaG = new google.maps.Marker({
    position: salamanca,
    map: map,
    icon: image
  });

  google.maps.event.addListener(salamancaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Salamanca.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var tenerife = new google.maps.LatLng(28.2932285,-16.522718);
  var tenerifeG = new google.maps.Marker({
    position: tenerife,
    map: map,
    icon: image
  });

  google.maps.event.addListener(tenerifeG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Tenerife.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  var segovia = new google.maps.LatLng(40.9118568,-4.1942675);
  var segoviaG = new google.maps.Marker({
    position: segovia,
    map: map,
    icon: image
  });

  google.maps.event.addListener(segoviaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Segovia.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  var sevilla = new google.maps.LatLng(37.3753708,-5.9550582);
  var sevillaG = new google.maps.Marker({
    position: sevilla,
    map: map,
    icon: image
  });

  google.maps.event.addListener(sevillaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Sevilla.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  var soria = new google.maps.LatLng(41.7671215,-2.4745791);
  var soriaG = new google.maps.Marker({
    position: soria,
    map: map,
    icon: image
  });

  google.maps.event.addListener(soriaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Soria.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });




  /******************************************************T*/
  var tarragona = new google.maps.LatLng(41.1258048,1.2385834);
  var tarragonaG = new google.maps.Marker({
    position: tarragona,
    map: map,
    icon: image
  });

  google.maps.event.addListener(tarragonaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Tarragona.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  var teruel = new google.maps.LatLng(40.3450096,-1.1009648);
  var teruelG = new google.maps.Marker({
    position: teruel,
    map: map,
    icon: image
  });

  google.maps.event.addListener(teruelG, 'click', function() {
    $("#ciudad").hide(500);
    $.get( dir+"top-Teruel.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  var toledo = new google.maps.LatLng(39.8622093,-3.9910839);
  var toledoG = new google.maps.Marker({
    position: toledo,
    map: map,
    icon: image
  });

  google.maps.event.addListener(toledoG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Toledo.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  /******************************************************V*/

  var valencia = new google.maps.LatLng(39.4077853,-0.3615113);
  var valenciaG = new google.maps.Marker({
    position: valencia,
    map: map,
    icon: image
  });

  google.maps.event.addListener(valenciaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Valencia.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  var valladolid = new google.maps.LatLng(41.6081478,-4.6907529);
  var valladolidG = new google.maps.Marker({
    position: valladolid,
    map: map,
    icon: image
  });

  google.maps.event.addListener(valladolidG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Valladolid.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  var vizcaya = new google.maps.LatLng(43.2195617,-2.9309957);
  var vizcayaG = new google.maps.Marker({
    position: vizcaya,
    map: map,
    icon: image
  });

  google.maps.event.addListener(vizcayaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Vizcaya.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });



  /******************************************************V*/
  var zamora = new google.maps.LatLng(41.5038098,-5.7445361);
  var zamoraG = new google.maps.Marker({
    position: zamora,
    map: map,
    icon: image
  });

  google.maps.event.addListener(zamoraG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Zamora.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });


  var zaragoza = new google.maps.LatLng(41.6516912,-0.8949809);
  var zaragozaG = new google.maps.Marker({
    position: zaragoza,
    map: map,
    icon: image
  });

  google.maps.event.addListener(zaragozaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Zaragoza.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });

  /***************************************Ciudades autónomas*/
  var ceuta = new google.maps.LatLng(35.8889625,-5.3185258);
  var ceutaG = new google.maps.Marker({
    position: ceuta,
    map: map,
    icon: image
  });

  google.maps.event.addListener(ceutaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Ceuta.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });

  var melilla = new google.maps.LatLng(35.2862716,-2.9445265);
  var melillaG = new google.maps.Marker({
    position: melilla,
    map: map,
    icon: image
  });

  google.maps.event.addListener(melillaG, 'click', function() {
    $("#ciudad").hide(500);
    $.get(  dir+"top-Melilla.html", function( data ) {
      $( "#ciudad" ).html( data );
    });
    $("#ciudad").show(500);
  });
}
