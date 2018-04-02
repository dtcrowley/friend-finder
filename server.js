var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 8080;
var app = express();

app.use(parse.urlencoded({ extended: true }));
app.use(parse.json());

require("../app/routing/html-routes.js")(app);

app.listen(PORT, function(){
    console.log("==> Server listening on http:localhost:" + PORT);
})
