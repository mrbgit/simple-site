$(document).ready(function() {
  // assigns function to run when #team button is clicked
  $("#team").on("click", function() {
    // assigns the id of the #team button as the url variable
    var url = $(this).attr("id");
    // gets the value of the page /team and calls a function
    $.get(url, function (response) {
    // create variables for function
    // this holds the value to be placed in the text box once the function has run
    var positionName;
    // this is a boolean to turn false if the value entered in the text box is found in the array
    var errorResponse = true;
    // this takes the value of what is entered in the text box
    var playerEntered = $("#playerEntered").val();
    // for loop to search through the array
    for (var i = 0; i < response.length; i++) {
      // make the name entered and the name value in the array lower case and check if they are equal
      if(response[i]["name"].toLowerCase()  === playerEntered.toLowerCase()){
        // if they are equal set positionName equal to a string of the player's name and position and set the errorResponse to false
        positionName = response[i]["name"] + " is a " + response[i].position;
        errorResponse = false;
      }
    }
    // if the error response is true set positionName equal to an error string saying the playerEntered is not a player
    if (errorResponse) {
      positionName = playerEntered + " is not a Sounders player";
    }
    // place the positionName message in the DOM
    $("#playerPosition").text(positionName);
  });
});

$("#myButton").on("click", function(){
  $.get("randomStringFromArray", function (response) {
  $("#answer").text(response);
  });
})

  $('#jokes').on('click', function() {
    $.get("jokes", function (response) {
      $("#ajax-text").text(response);
    })
  /*
    var url = $(this).attr('id');
    $.get(url, function (response) {
      var resText;
      if(typeof response === 'object'){
        resText = response.setup + ': ' + response.punchline;
      } else {
        resText = response;
      }
      $('#ajax-text').text(resText);
    });
  */});

  $("#piglatin").on("submit", function(e) {
    e.preventDefault();
    var firstname = $('input[name=firstname]').val();
    var lastname = $('input[name=lastname]').val();
    var name = {firstname: firstname, lastname: lastname};
    // console.log(name.firstname);
    $.post("piglatin", name, function (response) {
      var piglatinified = response.firstname + " " +
      response.lastname;
    $("#piglatinified").text(piglatinified);
    });
  });

// New Tutnese translator
// assign function to fun on submit of tutnese form
  $("#tutnese").on("submit", function(e) {
    // Stop page from restarting on form submit
    e.preventDefault();
    // get the values from the tutnese form
    var firstnameTutnese = $("input[name=firstnameTutnese]").val();
    var lastnameTutnese = $("input[name=lastnameTutnese]").val();
    var tutneseName = {firstnameTutnese: firstnameTutnese, lastnameTutnese: lastnameTutnese};
    $.post("tutnese", tutneseName, function(response) {
      var madeIntoTutanese = response.firstnameTutnese + " " +
      response.lastnameTutnese;
    $("#tutnesed").text(madeIntoTutanese);
    });
  });

});

