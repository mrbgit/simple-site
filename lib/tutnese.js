module.exports = function(inputName) {

  // create needed variables
  var individualLetters;
  var newName;
  // make list of vowels
  var vowels = ["a","e","i","o","u"];
  // create object for consonants
  var tutneseConsonants = {b: ["bub", "bab"], c: ["cash", "coch"], d: ["dud", "dorl"], f: ["fuf", "fud"], g: ["gug", "gul"], h: ["hash", "hutch"], j: ["jay", "jug"], k: ["kuck", "klack"], l: ["lul", "lon"], m: ["mum", "mom"], n: ["nun", "nog"], p: ["pub", "pup"], q: ["quack", "queue"], r: ["rug", "rur"], s: ["sus", "sag"], t: ["tut", "taf"], v: ["vuv", "van"], w: ["wack", "wash"], x: ["ex", "xux"], y: ["yub", "yuck"], z: ["zub", "zug"]};
  // make letters lowercast
  inputName = inputName.toLowerCase();
  // separate letters of original word into array of letters
  var separatedLetters = inputName.split("");
  // for loop to go through array of letters
  for (var i = 0; i < separatedLetters.length; i++) {
      var currentItem = separatedLetters[i];
    // if the letter in the arrray is not a vowel
    if (vowels.indexOf(separatedLetters[i]) !== -1) {} else {
      // get a random number between 0 and 1
      var randomNum = Math.round(Math.random());
      // make the value of the letter equal to a random item in the array
      separatedLetters[i] = tutneseConsonants[currentItem][randomNum];
      }
  }
  // join array into string
  newName = separatedLetters.join("");
  // split string into array of individual letters
  newName = newName.split("");
  // set the first letter in array to uppercase
  newName[0] = newName[0].toUpperCase();
  // join array back into string
  newName = newName.join("");
  // return value of function
  return newName;

}
