$(document).ready(function() {
  $("#myButton").on("click", function() {
    $.get("randomStringFromArray", function(response) {
    $("#answer").text(response);
    });
  });

  $("#jokes").on("click", function() {
    $.get("jokes", function(response) {
      $("#ajax-text").text(response);
    });
  });

  $("#soccerButton").on("click", function() {
    $.get("pickATeam", function(response) {
      $("#soccerTeam").text(response);
    });
  });

  $("#piglatin").on("submit", function(e) {
    e.preventDefault();
    var firstname = $("input[name=firstname]").val();
    var lastname = $("input[name=lastname]").val();
    var name = { firstname: firstname, lastname: lastname };
    $.post("piglatin", name, function(response) {
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
    var tutneseName = { firstnameTutnese: firstnameTutnese, lastnameTutnese: lastnameTutnese };
    $.post("tutnese", tutneseName, function(response) {
      var madeIntoTutanese = response.firstnameTutnese + " " +
      response.lastnameTutnese;
    $("#tutnesed").text(madeIntoTutanese);
    });
  });
});
