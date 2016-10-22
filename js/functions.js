var header = new Headhesive('header');

$(document).ready(function(){

  $('.navbar-toggle').on('click', function () {
    $('.collapse').collapse('toggle');
});

$(".work-list li").on('click', function(){
  var category = $(this).text();

  $('.work-list li').removeClass('active');
  $(this).toggleClass('active');

  if(category == 'All'){
    $(".work-unit").show();
  }else{
    $('.work-unit').hide();
    $('.work-unit').filter('.'+category).show();
  }
});

$('.work-unit').on('click', function () {
  $(this).toggleClass('active');

});

  $('#owl-clients').owlCarousel({
    items:4,
    loop:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
                0:{items:1},
                600:{items:2},
                1000:{items:4}
                }

  });
  $('#owl-service').owlCarousel({
    items:4,
    loop:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:7000,
    responsive:{
                0:{items:1},
                600:{items:2},
                1000:{items:1}
                }

  });
});

function initMap() {

  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  var styledMapType = new google.maps.StyledMapType(
    [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "29"
            },
            {
                "invert_lightness": true
            },
            {
                "hue": "#008fff"
            },
            {
                "saturation": "-73"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": "-72"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "32"
            },
            {
                "weight": "0.42"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "-53"
            },
            {
                "saturation": "-66"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-86"
            },
            {
                "gamma": "1.13"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#006dff"
            },
            {
                "lightness": "4"
            },
            {
                "gamma": "1.44"
            },
            {
                "saturation": "-67"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": "5"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "weight": "0.84"
            },
            {
                "gamma": "0.5"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "weight": "0.79"
            },
            {
                "gamma": "0.5"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "lightness": "-78"
            },
            {
                "saturation": "-91"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": "-69"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "5"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "10"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "10"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-35"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-97"
            },
            {
                "lightness": "-14"
            }
        ]
    }
],
      {name: 'Styled Map'});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var office = {lat: 51.520006, lng: -0.074279};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: office,
    zoom: 15,
    mapTypeControlOptions: {
      mapTypeIds: ['styled_map']
    }
  });
  var marker = new google.maps.Marker({
          position: office,
          map: map
        });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}
