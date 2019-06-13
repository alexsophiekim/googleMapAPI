var map;

var iceCreamShop =[
  {
    id:1,
    name: 'Gelissimo Gelateria',
    add: '11 Cable St, Wellington',
    lat: -41.289816,
    lng: 174.779321,
    description:'11 Cable St, Wellington',
    openingHours:{
      monday: '8am - 5.30pm',
      tuesday: '8am - 5.30pm'
    }
  },
  {
    id:2,
    name: 'Kaffee Eis',
    add: '2/236 Oriental Parade, Oriental Bay, Wellington ',
    lat: -41.291377,
    lng: 174.7922569,
    description:'Kaffee Eis - Oriental Bay 2/236 Oriental Parade, Oriental Bay, Wellington',
    openingHours:{
      monday: '7:30am - 6pm',
      tuesday: '7:30am - 6pm'
        }
  },
  {
    id:3,
    name: 'Kaffee Eis Courtenay',
    add: '25 Courtenay Pl, Te Aro, Wellington ',
    lat: -41.293936,
    lng: 174.782197,
    description:'Kaffee Eis - Courtenay 25 Courtenay pl, Te Aro, Wellington',
    openingHours:{
      monday: '7:30am - 11pm',
      tuesday: '7:30am - 11pm',
      wednesday: 'close',
      thursday:'7:30am - 11pm',
      friday: '7:30am - 11pm',
      saturday: '7:30am - 11pm',
      sunday: '7:30am - 11pm'
        }
  },
  {
    id:4,
    name: 'Kaffee Eis',
    add: '146 Cuba St, Wellington ',
    lat: -41.287890,
    lng: 174.779022,
    description:'Kaffee Eis - Cuba St 46 Cuba St, Wellington',
    openingHours:{
      monday: '7:30am - 11pm',
      tuesday: '7:30am - 11pm'
        }
  },
  {
    id:5,
    name: 'Tommy Millions',
    add: '101/103 Courtenay Pl, Te Aro, Wellington ',
    lat: -41.292662,
    lng: 174.778967,
    description:'address is 101/103 Courtenay Pl, Te Aro, Wellington',
    openingHours:{
      monday: '11am - 11pm',
      tuesday: '11am - 11pm'
        }
  },
  {
    id:6,
    name: 'Carrello Pizza Gelato Coffee',
    add: '228 Oriental Parade, Oriental Bay, Wellington ',
    lat: -41.291547,
    lng: 174.793849,
    description:'228 Oriental Parade, Oriental Bay, Wellington ',
    openingHours:{
      monday: '11am - 9pm',
      tuesday: '11am - 9pm'
    }
  },
  {
    id:7,
    name: 'Enigma Cafe',
    add: '6011/128 Courtenay Pl, Te Aro, Wellington',
    lat: -41.292501,
    lng: 174.779307,
    description:'6011/128 Courtenay Pl, Te Aro, Wellington',
    openingHours:{
      monday: '7.30am - 12am',
      tuesday: '7.30am - 12am'
    }
  },
  {
    id:8,
    name: 'The Little Waffle Shop',
    add: '53 Courtenay Pl, Te Aro, Wellington ',
    lat: -41.293685,
    lng: 174.781381,
    description:'53 Courtenay Pl, Te Aro, Wellington ',
    openingHours:{
      monday: '1pm - 10pm',
      tuesday: '1pm - 10pm'
    }
  },
  {
    id:9,
    name: 'Field & Green',
    add: '262 Wakefield St, Te Aro, Wellington',
    lat: -41.292463,
    lng: 174.782351,
    description:'262 Wakefield St, Te Aro, Wellington',
    openingHours:{
      monday: 'closed',
      tuesday: 'closed'
    }
  },
  {
    id:10,
    name: 'The Frogurt Store',
    add: '89 Courtenay Pl, Te Aro, Wellington',
    lat: -41.293046,
    lng: 174.779414,
    description:'89 Courtenay Pl, Te Aro, Wellington',
    openingHours:{
      monday: '11.30am - 10.30pm',
      tuesday: '11.30am - 10.30pm'
    }
  },
]

function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -41.286461, lng: 174.776230},
      zoom: 14,
      styles: [
            {
              elementType: 'geometry',
              stylers: [
                {color: '#84817a'}
              ]
            },
            {
              elementType: 'labels.text.stroke',
              stylers: [
                {color: '#84817a'}
              ]
            },
            {
              elementType: 'labels.text.fill',
              stylers: [
                {color: '#f7f1e3'}
              ]
            },
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
      ]
    });

    for (var i = 0; i < iceCreamShop.length; i++) {
      var marker = new google.maps.Marker({
          position: {
              lat: iceCreamShop[i].lat,
              lng: iceCreamShop[i].lng
          },
          map: map,
          animation: google.maps.Animation.DROP,
          icon: 'img/markerIcon.png',
          markerTitle: iceCreamShop[i].name,
          markerID: iceCreamShop[i].id

      });
      addClickEventToMarker(marker);
    }
    var infoBox;
    var firstMarker;
    var secondMarker;
    function addClickEventToMarker(singleMarker){
      if (infoBox) {
        infoBox.close();
      }

      infoBox = new google.maps.InfoWindow();
      google.maps.event.addDomListener(singleMarker,'click',function(){

        infoBox.setContent('<div><h3>'+singleMarker.markerTitle+'</h3></div>');
        infoBox.open(map, singleMarker);

        for (var i = 0; i < iceCreamShop.length; i++) {
          if (iceCreamShop[i].id === singleMarker.markerID) {
              var markerSingle = iceCreamShop[i];
              break;
          }
        }
        $('#details').show();
        $('#details').find('h2').text(markerSingle['name']);
        $('#details').find('p').text(markerSingle['description']);
        $('#mon').text(markerSingle['openingHours']['monday']);
        $('#tues').text(markerSingle['openingHours']['tuesday']);


        // singleMarker.setIcon('img/redMarker.png');
        if (firstMarker) {
            // console.log(firstMarker);
            // console.log('first marker has a value');
            if (secondMarker) {
                firstMarker.setIcon('img/markerIcon.png');
                secondMarker.setIcon('img/markerIcon.png');
                secondMarker = null;
                firstMarker = singleMarker;
                singleMarker.setIcon('img/redMarker.png');
                // console.log('second marker has a value');
                if (directionsDisplay) {
                    directionsDisplay.setMap(null);
                }
            } else {
                // console.log('we are now setting second marker');
                secondMarker = singleMarker;
                singleMarker.setIcon('img/redMarker.png');
                getDirections();
            }
        } else {
            firstMarker = singleMarker;
            singleMarker.setIcon('img/redMarker.png');
            // console.log('we have now set first marker');
        }
        // console.log('marker 1 location is '+ firstMarker.position);
        // console.log('marker 2 location is '+ secondMarker.position);

      });
    }

    function getDirections(){

      // console.log('show me the directions');
      var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer({
        polylineOptions: {
            strokeOpacity: 0.5,
            strokeColor: 'red',
            strokeWeight: 10
        }
      });

      directionsDisplay.setMap(map);

      directionsService.route({
        origin: firstMarker.position,
        destination: secondMarker.position,
        travelMode: 'DRIVING'
      }, function(response, status){
          if (status == 'OK') {
              // console.log(response.routes[0].legs);
              for (var i = 0; i < response.routes[0].legs.length; i++) {
                console.log(response.routes[0].legs[i].distance.text);
                console.log(response.routes[0].legs[i].duration.text);

              }
              directionsDisplay.setDirections(response);

          } else if (status == 'NOT_FOUND') {
              console.log('either your origin or destination is invalid');
          } else if (status == 'ZERO_RESULTS') {
              alert('sorry there is no routes available')
          }
      })

    }


}




google.maps.event.addDomListener(window,'load',initMap)
