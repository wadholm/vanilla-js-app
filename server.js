const http = require('http');
const fs = require('fs');

let html;
let css;
let js;
let image;
let favicon;

fs.readFile('./img/favicon.ico', function (err, data) {
  if (err) {
    throw err;
  }
  favicon = data;
});

fs.readFile('./img/what.jpg', function (err, data) {
  if (err) {
    throw err;
  }
  image = data;
});

fs.readFile('./index.html', function (err, data) {
  if (err) {
    throw err;
  }
  html = data;
});
fs.readFile('./style.css', function (err, data) {
  if (err) {
    throw err;
  }
  css = data;
});
fs.readFile('./app.js', function (err, data) {
  if (err) {
    throw err;
  }
  js = data;
});
 
http.createServer((req, res) => {
  res.statusCode = 200;
if(req.url.indexOf('.css') != -1){
   res.writeHead(200, {'Content-Type': 'text/css'});
   res.write(css);
   res.end();
   return;
  }
  if(req.url.indexOf('app.js') != -1){
   res.writeHead(200, {'Content-Type': 'text/javascript'});
   res.write(js);
   res.end();
   return;
  }

  if(req.url.indexOf('.jpg') != -1){
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.write(image);
    res.end();
    return;
  }

  if(req.url.indexOf('.ico') != -1){
    res.writeHead(200, {'Content-Type': 'image/ico'});
    res.write(favicon);
    res.end();
    return;
  }

res.writeHead(200, {"Content-Type": "text/html"});
  res.write(html);
  res.end();
}).listen(1337);
