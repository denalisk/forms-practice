$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var celebrity1Input = $("input#celebrity1").val();
    var person1Input = $("input#person1").val();
    var animalInput = $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    var adjectiveInput = $("input#adjective").val();

    $(".celebrity1").text(celebrity1Input);
    $(".person1").text(person1Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);
    $(".adjective").text(adjectiveInput);

    $("#story").show();

    event.preventDefault();

  })
})
