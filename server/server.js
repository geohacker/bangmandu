var express = require('express');
var MapboxClient = require('mapbox');
var client = new MapboxClient('sk.eyJ1IjoiZ2VvaGFja2VyIiwiYSI6ImNqNmx1aXBveDFwYXIycHFtZzkweXJ5Y3MifQ.bELOJS4M7EsK-3sXEhZ0RA');
var datasetID = 'cj6lnkplm1nd033o55pczx8rw';
var moment = require('moment');

var app = express();

app.get('/', function(req, res) {
    var lat = parseFloat(req.query.lat);
    var lon = parseFloat(req.query.lon);
    var timestamp = req.query.timestamp;
    var feature = {
        'id': timestamp,
        'type': "Feature",
        'geometry': {
            'type': 'Point',
            'coordinates': [lon, lat]
        },
        'properties': {
            'timestamp': parseInt(timestamp, 10),
            'altitude': parseFloat(req.query.altitude, 10) || null,
            'speed': parseFloat(req.query.speed) || null,
            'accuracy': parseFloat(req.query.accuracy) || null,
            'time': moment.utc(timestamp).toISOString(),
            'direction': req.query.direction || null
        }
    };
    client.insertFeature(feature, datasetID, function(err, feature) {
        if (err) {
            res.send(err);
        }
        res.send(feature);
    });
});

app.listen(121212, function() {
    console.log('listening.');
});