var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var port = process.env.PORT || 3000;
var piglatinify = require("./lib/piglatinify.js");
var tutneseify = require("./lib/tutnese.js");
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
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u' , 'v', 'w', 'x','y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&'];
var randomString = '';
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

// use string generator at /random-strings page
app.get('/random-strings', function(req, res){
  var tempArray = [];
      var randomNum = Math.floor((Math.random() * 25) + 1);
      for (var i = 0; i < randomNum; i++) {
        var randomNumber = Math.floor(Math.random() * alphabet.length);
        tempArray[i] = alphabet[randomNumber];
      }
      randomString = tempArray.join('');
      res.send(randomString);
      return randomString;
});

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

  // Tutnese function
function tutneseify(inputName) {
  // create needed variables
  var individualLetters;
  var newName;
  // create hash for vowels
  // var vowelHash = {a: 1, e: 1, i: 1, o:1, u:1, A: 1, E: 1, I: 1, O: 1, U: 1};
  // console.log(vowelHash);
  var vowels = ["a","e","i","o","u"];
  // create object for consonants
  var tutneseConsonants = {b: ["bub", "bab"], c: ["cash", "coch"], d: ["dud", "dorl"], f: ["fuf", "fud"], g: ["gug", "gul"], h: ["hash", "hutch"], j: ["jay", "jug"], k: ["kuck", "klack"], l: ["lul", "lon"], m: ["mum", "mom"], n: ["nun", "nog"], p: ["pub", "pup"], q: ["quack", "queue"], r: ["rug", "rur"], s: ["sus", "sag"], t: ["tut", "taf"], v: ["vuv", "van"], w: ["wack", "wash"], x: ["ex", "xux"], y: ["yub", "yuck"], z: ["zub", "zug"]};
  // make letters lowercast
  inputName.toLowerCase();
  // separate letters of original word into array of letters
  var separatedLetters = inputName.split("");
  console.log(separatedLetters);
  console.log("the length of the array separatedLetters is " + separatedLetters.length);
  // for loop to go through array of letters
  for (var i = 0; i < separatedLetters.length; i++) {
    console.log("the loop ran and the value was " + separatedLetters[i]);
      var currentItem = separatedLetters[i];
    // if the letter in the arrray is not a vowel
    if (vowels.indexOf(separatedLetters[i]) !== -1) {
      console.log("the if loop ran");
    } else {
      console.log("separatedLetters[i] " + separatedLetters[i]);
      console.log("currentItem " + currentItem);
      console.log("tutneseConsonants[currentItem] " + tutneseConsonants[currentItem]);
      // get a random number between 0 and 1
      var randomNum = Math.round(Math.random());
      // var arrayLetter = tutneseConsonants[currentItem][randomNum];
      console.log("this letter came from an array " + tutneseConsonants[currentItem][randomNum]);
      // make the value of the letter equal to a random item in the array
      // separatedLetters[i] = arrayLetter;
      separatedLetters[i] = tutneseConsonants[currentItem][randomNum];
      }
  }
  newName = separatedLetters.join("");
  // newName.charAt(0).toUpperCase();
  return newName;
}

app.post("/tutnese", function(req, res) {
  var firstname = tutneseify(req.body.firstnameTutnese);
  var lastname = tutneseify(req.body.lastnameTutnese);
  var tutnesed = {firstname: firstname, lastname:
  lastname};
  res.json(tutnesed);
});
