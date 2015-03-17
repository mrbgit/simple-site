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

// var team = [{ name: "Osvaldo Alonso",
//               position: "Midfielder"},
//               {name: "Stefan Frei",
//               position: "Goalkeeper"},
//               {name: "Tyrone Mears",
//               position: "Defender"},
//               {name: "Brad Evans",
//               position: "Midfielder"},
//               {name: "Chad Marshall",
//               position: "Defender"},
//               {name: "Leonardo Gonzalez",
//               position: "Defender"},
//               {name: "Lamar Neagle",
//               position: "Midfielder/Forward"},
//               {name: "Gonzalo Pineda",
//               position: "Midfielder"},
//               {name: "Micheal Azira",
//               position: "Midfielder"},
//               {name: "Marco Pappa",
//               position: "Midfielder"},
//               {name: "Clint Dempsey",
//               position: "Forward"},
//               {name: "Obafemi Martins",
//               position: "Forward"}];

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
// use the app.get function to put an endpoint of /team and take in a function
// app.get("/team", function(req, res) {
// // use .json on the res parameter to get the value of the team object and assign it to the parameter
// res.json(team);
// });

// app.get("/team", function (req, res) {
//   var playerGuess = checkPlayer(req.body.thePlayerName);
//   res.json(playerGuess);
// });

app.get("/pickATeam", function (req, res) {
  res.json(pickATeam());
})

app.post("/piglatin", function(req, res) {
  var firstname = piglatinify(req.body.firstname);
  var lastname = piglatinify(req.body.lastname);
  var piglatined = {firstname: firstname, lastname:
  lastname};
  res.json(piglatined);
});

app.post("/tutnese", function(req, res) {
  var firstnameTutnese = tutneseify(req.body.firstnameTutnese);
  var lastnameTutnese = tutneseify(req.body.lastnameTutnese);
  var tutnesed = {firstnameTutnese: firstnameTutnese, lastnameTutnese: lastnameTutnese};
  res.json(tutnesed);
});

