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

  let currentItem = 0;
  const showcase = [
    {
      title: "Hello, world!",
      details01: "This is some text. Blah, blah, blah.",
      details02: "Ok, I'm bored.",
    },
    {
      title: "Goodbye, world!",
      details01: "This is some different text. Yada, yada, yada.",
      details02: "Well, I'm still bored.",
    },
  ];


  setInterval(function () {
    currentItem = (currentItem + 1) % showcase.length;
    $("#main-title").fadeOut(function () {
      $(this).html(showcase[currentItem].title);
      $(this).fadeIn();
      $("#main-details-01").fadeOut(function () {
        $(this).html(showcase[currentItem].details01);
        $(this).fadeIn();
        $("#main-details-02").fadeOut(function () {
          $(this).html(showcase[currentItem].details02);
          $(this).fadeIn();
        });
      });
    });
  }, 5000);
});
