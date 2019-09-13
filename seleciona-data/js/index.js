$(function() {
  let timeChosenField;

  $("input").on("focus", function() {
    let position = $(this).offset();
    let width = $(this).width();

    $(".time-chosen").css("left", position.left + width + 10);
    $(".time-chosen").css("top", position.top);
    $(".time-chosen").show();

    timeChosenField = $(this);
  });

  $("input").on("blur", function() {
    setTimeout(function() {
      $(".time-chosen").hide();
    }, 200);
  });

  $(".time-chosen button").on("click", function() {
    let time = $(this).html();
    timeChosenField.val(time);
  });
});
