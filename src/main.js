$(document).ready(function () {

  // fade in entire document
  $(document.body).fadeIn(800);

  // slide in main title
  $("#main-title").hide().slideDown(1000);

  // underline navigation link with its color on mouseover
  $(".header-navigation-link-list a").mouseover(function () {
    const item = $(this).children();
    item.css("border-bottom", "2px solid " + item.css("color"));
  });

  // remove navigation link underline on mouseout
  $(".header-navigation-link-list a").mouseout(function () {
    const item = $(this).children();
    if (!item.hasClass("selected"))
      item.css("border-bottom", "none");
  });

  // start playing the showcase
  new Showcase("showcase").play();
});
