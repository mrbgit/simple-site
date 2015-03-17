module.exports = function() {
  var mlsTeams = ["Chicago Fire", "Columbus Crew", "D.C. United", "Montreal Impact (Canada)", "New England Revolution", "New York City FC", "New York Red Bulls", "Orlando City SC", "Philadelphia Union", "Toronto FC", "Colorado Rapids", "FC Dallas", "Houston Dynamo", "LA Galaxy", "Portland Timbers", "Real Salt Lake", "San Jose Earthquakes", "Seattle Sounders FC", "Sporting Kansas City", "Vancouver Whitecaps FC"];

  var randomNumber = Math.floor(Math.random() * mlsTeams.length);
  var randomTeam = mlsTeams[randomNumber];
  console.log(randomTeam);
  return randomTeam;
}


