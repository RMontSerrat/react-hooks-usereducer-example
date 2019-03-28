const express = require('express')
const proxy = require('http-proxy-middleware');
const path = require('path');

const jsonPlaceholderProxy = proxy({
  target: 'https://api.github.com',
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug'
})

const app = express()

app.use('/', jsonPlaceholderProxy)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/scripts')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/scripts', 'index.html'));
  });
}

app.listen(5000)

console.log('[DEMO] Server: listening on port 5000')
