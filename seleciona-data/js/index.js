$(function() {
  $("input").on("focus", function() {
    let position = $(this).offset();
    let width = $(this).width();

    $(".time-chosen").css("left", position.left + width + 10);
    $(".time-chosen").css("top", position.top);
    $(".time-chosen").show();
  });

  $("input").on("blur", function() {
    $(".time-chosen").hide();
  });
});
