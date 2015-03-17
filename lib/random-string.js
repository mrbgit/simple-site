module.exports = function() {
  var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&" ];
  var randomString = "";
  var tempArray = [];
  var randomNum = Math.floor((Math.random() * 25) + 1);
  for (var i = 0; i < randomNum; i++) {
    var randomNumber = Math.floor(Math.random() * alphabet.length);
    tempArray[i] = alphabet[randomNumber];
  }
  randomString = tempArray.join("");
  return randomString;
};
