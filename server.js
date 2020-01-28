const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

// initialize
const app = express();

// parse cookies (not required, just in case)
app.use(cookieParser());

// plug in headers on handler
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

// Plug in routes
app.use(require('./api/routes'));

// Serve UI in dist folder
app.use(express.static('build'));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Creating Server
let http = require('http');

let httpServer = http.createServer(app);
let port = 8080;
httpServer.listen(port, () => {
  console.log(`Service is running at ${port}. Try running the UI at http://localhost:${port} or make an api call at http://localhost:${port}/api/primes/median/get?number=4`);
});

module.exports = {app, httpServer};