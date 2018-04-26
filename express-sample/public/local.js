$( document ).ready(function(){
    
    $('select').material_select();
    $('.carousel').carousel();
  });
  
  $( "#submit-survey" ).click(function() {
    event.preventDefault();
    var newFriend = {
      name: $('#name').val().trim(),
      profilePic: $('#image-link').val().trim(),
      scores: [
          $('#q1').val(),
          $('#q2').val(),
          $('#q3').val(),
          $('#q4').val(),
          $('#q5').val(),
          $('#q6').val(),
          $('#q7').val(),
          $('#q8').val(),
          $('#q9').val(),
          $('#q10').val(),
      ]
  };

  console.log(newFriend)

  // $.post("/api/friends", newFriend)
  //       .then(function(data) {
  //         console.log("add.html", data);
  //         alert("Adding character...");
  //       });

  $.post(currentURL + "/api/friends", newFriend, function(data) {
  })

  })

  