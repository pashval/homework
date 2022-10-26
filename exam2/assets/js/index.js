// Scroll
$("a[href^='#']").on("click", function () {
  let href = $(this).attr("href");
  if($(this).attr("href") !== undefined && $(this).attr("href") !== '') {
    $("html, body").animate({scrollTop:$(href).offset().top},500);
  }
  return false;
});

// Sliders
Fancybox.bind('[data-fancybox="gallery"]', {
    caption: function (fancybox, carousel, slide) {
      return (
        `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
      );
    },
  });

$(document).ready(function(){
    $('.news__items').slick({
      arrow:true,
      dots: true,
      infinite: true,
      slidesToShow: 3
    });
  });

  
  $('.header-slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows : false,
    dots: true,
    infinite: true
  });

// validation

let names = document.querySelector('#name');
let email = document.querySelector('#email');

names.addEventListener('focusout', checkName);
email.addEventListener('focusout', checkEmail);

function checkName() {
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (!regName.test(names.value)) {
  alert('Please provide a valid name');
  names.focus;
  return false;
}
}

function checkEmail() {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email.value)) {
  alert('Please provide a valid email address');
  email.focus;
  return false;
}
}

// map
marker.setMap(map);
  function myMap() {
    var myLatlng = new google.maps.LatLng(40.7547282924173, -73.97693441823259);
    var mapProp= {
      center:myLatlng,
      zoom:10,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]
    };
    var svg = '<svg width="106" height="106" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity=".3" cx="53" cy="53" r="53" fill="#fff"/><g opacity=".8" filter="url(#filter0_d_9_39)"><circle cx="53" cy="53" r="35" fill="#fff"/></g><circle cx="53" cy="53" r="8" fill="#7E5AFF"/><defs><filter id="filter0_d_9_39" x="3" y="3" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="7.5"/><feColorMatrix values="0 0 0 0 0.690196 0 0 0 0 0.690196 0 0 0 0 0.690196 0 0 0 0.25 0"/><feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_9_39"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_9_39" result="shape"/></filter></defs></svg>';
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map,
      icon: {
        url: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)
      },
      title: "Hello World!",
    });
    }
    marker.setMap(map);
