// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
    res.json({greeting: 'hello API'});
});

// API endpoint for /api/whoami
app.get('/api/whoami', function (req, res) {
    // Extract IP Address
    const ipAddress = req.ip || req.connection.remoteAddress;

    // Extract Language from Accept-Language header
    const language = req.headers['accept-language'] || 'Unknown';

    // Extract Software (User-Agent)
    const software = req.headers['user-agent'] || 'Unknown';

    // Respond with JSON
    res.json({
        ipaddress: ipAddress,
        language: language,
        software: software
    });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
