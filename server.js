var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

require(path.join(__dirname, './app/routing/api-routes'))(app);
require(path.join(__dirname, './app/routing/html-routes'))(app);

app.listen(PORT, function(){
    console.log("==> Server listening on http:localhost:" + PORT);
})
