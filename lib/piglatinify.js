module.exports = function(word) {
  // declare needed variables and make hash for vowels
  var letters;
  var changedWord;
  var vowelHash = {a: 1, e: 1, i: 1, o:1, u:1, A: 1, E: 1,
  I: 1, O: 1, U: 1};
  var wordArray;
  wordArray = word.toLowerCase();
  wordArray = wordArray.split("");
  if (vowelHash.hasOwnProperty(wordArray[0])) {
    changedWord = word + "-hay";
  } else if (!(vowelHash.hasOwnProperty(wordArray[0])) && !(vowelHash.hasOwnProperty(wordArray[1])) && (vowelHash.hasOwnProperty(wordArray[2]))) {
    var twoConsonantLetters = wordArray.splice(0,2);
    twoConsonantLetters = twoConsonantLetters.join("");
    changedWord = wordArray.join("") + "-" + twoConsonantLetters + "ay";
  } else if (!(vowelHash.hasOwnProperty(wordArray[0])) && !(vowelHash.hasOwnProperty(wordArray[1])) && !(vowelHash.hasOwnProperty(wordArray[2]))) {
    var threeConsonantLetters = wordArray.splice(0,3);
    threeConsonantLetters = threeConsonantLetters.join("");
    changedWord = wordArray.join("") + "-" + threeConsonantLetters + "ay";
  } else {
    letters = wordArray.shift();
    changedWord = wordArray.join("") + "-" + letters + "ay";
  }
  var newName = changedWord.split("");
  newName[0] = newName[0].toUpperCase();
  newName = newName.join("");
  return newName;
};

// module.exports = function(word) {
//   // declare needed variables and make hash for vowels
//   var letters;
//   var changedWord;
//   var fullName;
//   var vowelHash = {a: 1, e: 1, i: 1, o:1, u:1, A: 1, E: 1,
//   I: 1, O: 1, U: 1};
//   var wordArray;
//   // make all letters lowercase
//   var tempArray = word.toLowerCase();
//   // split array into separate words by space
//   wordArray = tempArray.split(" ");
//   for (var i; i < wordArray.length; i++) {
//     // declare variable to hold split word from wordArray
//     var currentWordArray = wordArray[i].split("");
//     if (vowelHash.hasOwnProperty(currentWordArray[0])) {
//       changedWord = currentWordArray.join("") + "-hay";
//     } else if (!(vowelHash.hasOwnProperty(currentWordArray[0])) && !(vowelHash.hasOwnProperty(currentWordArray[1])) && (vowelHash.hasOwnProperty(currentWordArray[2]))) {
//       var twoConsonantLetters = currentWordArray.splice(0,2);
//       twoConsonantLetters = twoConsonantLetters.join("");
//       changedWord = currentWordArray.join("") + "-" + twoConsonantLetters + "ay";
//     } else if (!(vowelHash.hasOwnProperty(currentWordArray[0])) && !(vowelHash.hasOwnProperty(currentWordArray[1])) && !(vowelHash.hasOwnProperty(currentWordArray[2]))) {
//       var threeConsonantLetters = currentWordArray.splice(0,3);
//       threeConsonantLetters = threeConsonantLetters.join("");
//       changedWord = currentWordArray.join("") + "-" + threeConsonantLetters + "ay";
//     } else {
//       letters = currentWordArray.shift();
//       changedWord = currentWordArray.join("") + "-" + letters + "ay";
//     }
//     var newName = changedWord.split("");
//     newName[0] = newName[0].toUpperCase();
//     newName = newName.join("");
//     fullName += newName + " ";
//   }
//     return fullName;
// };
