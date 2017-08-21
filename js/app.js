var stops = {"NAG":{"type":"Feature","properties":{"distance":"300","duration":"6","days":null,"direction":"return","type":null,"start":"2017/09/30","name":"Nagpur","code":"NAG","state":"Maharashtra","country":"India","wikidata":"https://www.wikidata.org/wiki/Q1513","end":"2017/09/29","day":5,"zone":null},"geometry":{"type":"Point","coordinates":[79.080837,21.149981]}},"IXU":{"type":"Feature","properties":{"distance":"235","duration":"5","days":null,"direction":"onward","type":null,"start":"2017/09/11","name":"Aurangabad","code":"IXU","state":"Maharashtra","country":"India","wikidata":"https://www.wikidata.org/wiki/Q200713","end":"2017/09/10","day":2,"zone":null},"geometry":{"type":"Point","coordinates":[75.328488,19.873942]}},"BWA":{"type":"Feature","properties":{"distance":"300","duration":"8","days":null,"direction":"return","type":null,"start":"2017/09/26","name":"Lumbini","code":"BWA","state":null,"country":"Nepal","wikidata":"https://www.wikidata.org/wiki/Q9213","end":"2017/09/25","day":1,"zone":"Lumbini"},"geometry":{"type":"Point","coordinates":[83.275718,27.484103]}},"KTM":{"type":"Feature","properties":{"distance":"","duration":"","days":null,"direction":"return","type":null,"start":"2017/09/25","name":"Kathmandu","code":"KTM","state":null,"country":"Nepal","wikidata":"https://www.wikidata.org/wiki/Q3037","end":"","day":null,"zone":"Bagmati Zone"},"geometry":{"type":"Point","coordinates":[85.320244,27.708796]}},"HYD":{"type":"Feature","properties":{"distance":"510","duration":"9","days":null,"direction":"return","type":null,"start":"2017/10/01","name":"Hyderabad","code":"HYD","state":"Telangana","country":"India","wikidata":"https://www.wikidata.org/wiki/Q1361","end":"2017/09/30","day":6,"zone":null},"geometry":{"type":"Point","coordinates":[78.419456,17.415284]}},"BLR":{"type":"Feature","properties":{"distance":"580","duration":"9","days":null,"direction":"return","type":null,"start":"","name":"Bangalore","code":"BLR","state":"Karnataka","country":"India","wikidata":"https://www.wikidata.org/wiki/Q1355","end":"2017/10/01","day":7,"zone":null},"geometry":{"type":"Point","coordinates":[77.591306,12.979114]}},"PNQ":{"type":"Feature","properties":{"distance":"837","duration":"13","days":null,"direction":"onward","type":null,"start":"2017/09/10","name":"Pune","code":"PNQ","state":"Maharashtra","country":"India","wikidata":"https://www.wikidata.org/wiki/Q1538","end":"2017/09/09","day":1,"zone":null},"geometry":{"type":"Point","coordinates":[73.854321,18.520424]}},"IDR":{"type":"Feature","properties":{"distance":"415","duration":"8","days":null,"direction":"onward","type":null,"start":"2017/09/12","name":"Indore","code":"IDR","state":"Madhya Pradesh","country":"India","wikidata":"https://www.wikidata.org/wiki/Q66616","end":"2017/09/11","day":3,"zone":null},"geometry":{"type":"Point","coordinates":[75.867938,22.720399]}},"VNS":{"type":"Feature","properties":{"distance":"300","duration":"8","days":null,"direction":"return","type":null,"start":"2017/09/28","name":"Varanasi","code":"VNS","state":"Uttar Pradesh","country":"India","wikidata":"https://www.wikidata.org/wiki/Q79980","end":"2017/09/26","day":2,"zone":null},"geometry":{"type":"Point","coordinates":[83.006893,25.335517]}},"LKO":{"type":"Feature","properties":{"distance":"309","duration":"7","days":null,"direction":"onward","type":null,"start":"2017/09/16","name":"Lucknow","code":"LKO","state":"Uttar Pradesh","country":"India","wikidata":"https://www.wikidata.org/wiki/Q47916","end":"2017/09/14","day":6,"zone":null},"geometry":{"type":"Point","coordinates":[80.934325,26.838166]}},"HJR":{"type":"Feature","properties":{"distance":"562","duration":"10","days":null,"direction":"onward","type":null,"start":"2017/09/14","name":"Khajuraho","code":"HJR","state":"Madhya Pradesh","country":"India","wikidata":"https://www.wikidata.org/wiki/Q178948","end":"2017/09/12","day":4,"zone":null},"geometry":{"type":"Point","coordinates":[79.925815,24.851557]}},"JLR":{"type":"Feature","properties":{"distance":"470","duration":"11","days":null,"direction":"return","type":null,"start":"2017/09/29","name":"Jabalpur","code":"JLR","state":"Madhya Pradesh","country":"India","wikidata":"https://www.wikidata.org/wiki/Q200878","end":"2017/09/28","day":4,"zone":null},"geometry":{"type":"Point","coordinates":[79.949128,23.160978]}},"PKR":{"type":"Feature","properties":{"distance":"204","duration":"7","days":null,"direction":"onward","type":null,"start":"2017/09/19","name":"Pokhara","code":"PKR","state":null,"country":"Nepal","wikidata":"https://www.wikidata.org/wiki/Q6640","end":"2017/09/17","day":9,"zone":"Gandaki Zone"},"geometry":{"type":"Point","coordinates":[83.990827,28.209914]}}};

var framesPerSecond = 15; 
var initialOpacity = 1
var opacity = initialOpacity;
var initialRadius = 8;
var radius = initialRadius;
var maxRadius = 18;
var currentLocation = {
  'type': 'Feature',
  'geometry': {
    'type': 'Point',
    'coordinates': [77.591306,12.979114]
  },
  'properties': {}
};

// setup map
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvaGFja2VyIiwiYSI6ImFIN0hENW8ifQ.GGpH9gLyEg0PZf3NPQ7Vrg';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/geohacker/cj6hcmopz48qw2rpgjidmby7k', //stylesheet location
  center: [79.0820556, 21.1498134], // starting position
  zoom: 4,
  minZoom: 4,
  dragPan: window.innerWidth < 800 ? false : true
});

// setup rss for instagram
$('#rssfeed').rss("https://zapier.com/engine/rss/2437952/bangmandu", {
  limit: 50,
  tokens: {
    image: function(entry, tokens) { return entry.content },
    url: function(entry, tokens) { return entry.link }
  },
  layoutTemplate: "<div class='flex-parent flex-parent--column flex-parent--space-between-main-ml flex-parent--space-between-main-mxl flex-parent--wrap-mm flex-parent--row-ml flex-parent--row-mxl my24'>{entries}</div>",
  entryTemplate: "<div class='photo wmax240-ml hmax240-ml wmax240-mxl hmax240-mxl hmin240-mm wmin240-mm'><a target='_blank' href='{url}'>{image}</a></div>",
  error: function (err) {console.log(err)}
});

// setup map events
map.on('load', function() {
  // setup city marker layer
  var city = {
    "type": "geojson",
    "data": stops['BLR']
  };

  map.addSource('city', city);

  var cityLayer = {
    "id": "city",
    "source": "city",
    "type": "circle",
    "paint": {
      "circle-radius": initialRadius,
      "circle-radius-transition": {duration: 0},
      "circle-opacity-transition": {duration: 0},
      "circle-color": "black"
    }
  }

  map.addLayer(cityLayer);

  // Start the animation.
  animateMarker(0);

  $('.city').on('click', function(e) {
    $(this).addClass('border--2 active');
    var code = e.currentTarget.dataset.code;
    var geojson = stops[code];
    map.getSource('city').setData(geojson.geometry);
    map.setCenter(geojson.geometry.coordinates);
    map.zoomTo(13);
  });

  $('.city').on('mouseover', function(e) {
    map.addLayer(cityLayer);
    var code = e.currentTarget.dataset.code;
    var geojson = stops[code];
    map.getSource('city').setData(geojson.geometry);
  });

  $('.city').on('mouseleave', function() {
    map.getSource('city').setData(currentLocation);
    $('.city').removeClass('border--2 active');
    map.setCenter([80.223,20.664]);
    // map.zoomTo(4.6);
  });
});


function animateMarker(timestamp) {
  setTimeout(function(){
    requestAnimationFrame(animateMarker);

    radius += (maxRadius - radius) / framesPerSecond;
    opacity -= ( .9 / framesPerSecond );


    if (opacity <= 0) {
      radius = initialRadius;
      opacity = initialOpacity;
    }

    map.setPaintProperty('city', 'circle-radius', radius);
    map.setPaintProperty('city', 'circle-opacity', opacity);

  }, 1000 / framesPerSecond);

}
