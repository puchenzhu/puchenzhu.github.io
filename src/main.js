$(document).ready(function () {
  $(document.body).fadeIn(800);

  $("#title").hide().slideDown(1000);

  $(".nav a").mouseover(function () {
    $(this).children().css("border-bottom", "2px solid " + $(this).children().css("color"));
  });

  $(".nav a").mouseout(function () {
    if ($(this).children().hasClass("selected"))
      return;
    $(this).children().css("border-bottom", "none");
  });
});
