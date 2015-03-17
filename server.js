var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var port = process.env.PORT || 3000;
var piglatinify = require("./lib/piglatinify.js");
var tutneseify = require("./lib/tutnese.js");
var randomStringFromArray  = require("./lib/random-string.js");
var randomJoke  = require("./lib/jokes.js");
var checkPlayer = require("./lib/sounders.js");
var pickATeam = require("./lib/mls.js")
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

// use /app as home folder
app.use(express.static(__dirname + '/app/'));
// listen for the server port and console log it
app.listen(port, function(){
  console.log('Server has been started on ' + port);
});
//make index.html home page
app.get('/', function(req, res){
  res.sendFile('index.html');
});
// serve random joke from json object
app.get('/jokes', function(req, res){
// run the joke function and use json to assign the value to the res parameter
  res.json(randomJoke());
});
// get random string from string function
app.get("/randomStringFromArray", function(req, res) {
  // run the random string function and use json to assign the value to the res parameter
  res.json(randomStringFromArray());
})
// run the random team function and use json t assign the value to the res parameter
app.get("/pickATeam", function (req, res) {
  res.json(pickATeam());
})
// take values from pig latin from from and use them as arguments for the pig lating function, then assign the result of the function to the res parameter with json
app.post("/piglatin", function(req, res) {
  var firstname = piglatinify(req.body.firstname);
  var lastname = piglatinify(req.body.lastname);
  var piglatined = {firstname: firstname, lastname:
  lastname};
  res.json(piglatined);
});
// take values from tutnese from from and use them as arguments for the tutnese function, then assign the result of the function to the res parameter with json
app.post("/tutnese", function(req, res) {
  var firstnameTutnese = tutneseify(req.body.firstnameTutnese);
  var lastnameTutnese = tutneseify(req.body.lastnameTutnese);
  var tutnesed = {firstnameTutnese: firstnameTutnese, lastnameTutnese: lastnameTutnese};
  res.json(tutnesed);
});
