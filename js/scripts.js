$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var contentInput = $("input#content").val();
    var upperContent = contentInput.toUpperCase();

    $(".content").text(upperContent);

    // $("#reply").show();

    event.preventDefault();

  });
});
