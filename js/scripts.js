$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var streetAddressInput = $("input#streetAddress").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipcodeInput = $("input#zipcode").val();

    $(".name").text(nameInput);
    $(".streetAddress").text(streetAddressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zipcode").text(zipcodeInput);

    $("#letter").show();

    event.preventDefault();

  })
})
