var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var port = process.env.PORT || 3000;
var piglatinify = require("./lib/piglatinify.js");
var tutneseify = require("./lib/tutnese.js");
var randomStringFromArray  = require("./lib/random-string.js");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

var team = [{ name: "Osvaldo Alonso",
              position: "Midfielder"},
              {name: "Stefan Frei",
              position: "Goalkeeper"},
              {name: "Tyrone Mears",
              position: "Defender"},
              {name: "Brad Evans",
              position: "Midfielder"},
              {name: "Chad Marshall",
              position: "Defender"},
              {name: "Leonardo Gonzalez",
              position: "Defender"},
              {name: "Lamar Neagle",
              position: "Midfielder/Forward"},
              {name: "Gonzalo Pineda",
              position: "Midfielder"},
              {name: "Micheal Azira",
              position: "Midfielder"},
              {name: "Marco Pappa",
              position: "Midfielder"},
              {name: "Clint Dempsey",
              position: "Forward"},
              {name: "Obafemi Martins",
              position: "Forward"}];
var jokes = [
{setup: 'What do you call a masturbating cow?',
punchline: 'Beef stroking off!'},
{setup: 'What do you call a masseuse who hates women?',
punchline: 'A (massage)ynist!'},
{setup: 'What did the zero say to the eight?',
punchline: 'nice belt'}
];
// use /app as home folder
app.use(express.static(__dirname + '/app/'));

//make index.html home page
app.get('/', function(req, res){
  res.sendFile('index.html');
});

// serve random joke from json object
app.get('/jokes', function(req, res){
  var randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});

app.get("/randomStringFromArray", function(req, res) {
  // var newString = randomStringFromArray();
  res.json(randomStringFromArray());
})

app.listen(port, function(){
  console.log('Server has been started on ' + port);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////

// use the app.get function to put an endpoint of /team and take in a function
app.get("/team", function(req, res) {
// use .json on the res parameter to get the value of the team object and assign it to a variable
res.json(team);
});

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

