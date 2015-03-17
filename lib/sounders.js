module.exports = function (guess){
  // create array of player objects
  var team = [{ name: "Osvaldo Alonso", position: "Midfielder"}, {name: "Stefan Frei", position: "Goalkeeper"}, {name: "Tyrone Mears", position: "Defender"}, {name: "Brad Evans", position: "Midfielder"}, {name: "Chad Marshall", position: "Defender"}, {name: "Leonardo Gonzalez", position: "Defender"}, {name: "Lamar Neagle", position: "Midfielder/Forward"}, {name: "Gonzalo Pineda", position: "Midfielder"}, {name: "Micheal Azira", position: "Midfielder"}, {name: "Marco Pappa", position: "Midfielder"}, {name: "Clint Dempsey", position: "Forward"}, {name: "Obafemi Martins", position: "Forward"}];
  // create variables for function
  // this holds the value to be placed in the text box once the function has run
  var positionName;
  // this is a boolean to turn false if the value entered in the text box is found in the array
  var errorResponse = true;
  // for loop to search through the array
  for (var i = 0; i < team.length; i++) {
  // make the name entered and the name value in the array lower case and check if they are equal
  if(team[i]["name"].toLowerCase()  === guess.toLowerCase()){
   // if they are equal set positionName equal to a string of the player's name and position and set the errorResponse to   false
   positionName = team[i]["name"] + " is a " + team[i].position;
   errorResponse = false;
  }
  }
  // if the error response is true set positionName equal to an error string saying the guess is not a player
  if (errorResponse) {
  positionName = guess + " is not a Sounders player";
  }
  return positionName;
}
