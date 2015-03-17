module.exports = function() {
  var jokes = [
  {setup: 'What do you call a masturbating cow?',
  punchline: 'Beef stroking off!'},
  {setup: 'What do you call a masseuse who hates women?',
  punchline: 'A (massage)ynist!'},
  {setup: 'What did the zero say to the eight?',
  punchline: 'nice belt'}
  ];
  var randomIndex = Math.floor(Math.random() * jokes.length);
  var resText;
  if(typeof jokes[randomIndex] === 'object'){
    resText = jokes[randomIndex].setup + ': ' + jokes[randomIndex].punchline;
  } else {
    resText = jokes[randomIndex];
  }
  return resText;
}
