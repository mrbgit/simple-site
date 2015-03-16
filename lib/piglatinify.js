module.exports = function(word) {
  var letters;
  var changedWord;
  var vowelHash = {a: 1, e: 1, i: 1, o:1, u:1, A: 1, E: 1,
  I: 1, O: 1, U: 1};
  var wordArray = word.split('');
  if (vowelHash.hasOwnProperty(wordArray[0])) {
  return word + "-hay";
  } else if (!(vowelHash.hasOwnProperty(wordArray[0])) && !(vowelHash.hasOwnProperty(wordArray[1])) && (vowelHash.hasOwnProperty(wordArray[2]))) {
    var twoConsonantLetters = wordArray.splice(0,2);
    twoConsonantLetters = twoConsonantLetters.join("");
    var twoConsonantWord = wordArray.join("") + "-" + twoConsonantLetters + "ay";
    return twoConsonantWord;
  } else if (!(vowelHash.hasOwnProperty(wordArray[0])) && !(vowelHash.hasOwnProperty(wordArray[1])) && !(vowelHash.hasOwnProperty(wordArray[2]))) {
    var threeConsonantLetters = wordArray.splice(0,3);
    threeConsonantLetters = threeConsonantLetters.join("");
    var threeConsonantWord = wordArray.join("") + "-" + threeConsonantLetters + "ay";
    return threeConsonantWord;
  } else {
    letters = wordArray.shift();
    changedWord = wordArray.join("") + "-" + letters + "ay";
    return changedWord;
  }
};
