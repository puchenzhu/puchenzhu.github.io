/**
 * create a new Showcase
 * @param {string} showcaseID      the ID of the showcase element
 * @param {number} transitionSpeed the speed that elements fade at (400ms default)
 * @param {number} intervalSpeed   the speed that sets are changed (5000ms default)
 */
function Showcase(showcaseID, transitionSpeed, intervalSpeed) {
  const showcase  = $(`#${showcaseID}`);
  const title     = $("#showcase-title");
  const subtextA  = $("#showcase-subtext-a");
  const subtextB  = $("#showcase-subtext-b");
  transitionSpeed = transitionSpeed || 400;
  intervalSpeed   = intervalSpeed   || 5000;
  let sets            = [];
  let currentSetIndex = 0;
  showcase.children(".showcase-set").each(function (i, element) {
    sets.push(new ShowcaseSet($(element)));
  });

  function showFirstItem() {
    const set = sets[currentSetIndex];
    currentSetIndex = (currentSetIndex + 1) % sets.length;
    const titleText    = set.getTitle();
    const subtextAText = set.getSubtextA();
    const subtextBText = set.getSubtextB();
    title.hide();
    title.html(titleText);
    title.slideDown(transitionSpeed * 2.5);
    subtextA.hide();
    subtextA.html(subtextAText);
    subtextA.fadeIn(transitionSpeed * 2.5);
    subtextB.hide();
    subtextB.html(subtextBText);
    subtextB.fadeIn(transitionSpeed * 2.5);
  }

  function showNextItem() {
    const set = sets[currentSetIndex];
    currentSetIndex = (currentSetIndex + 1) % sets.length;
    const titleText    = set.getTitle();
    const subtextAText = set.getSubtextA();
    const subtextBText = set.getSubtextB();
    title.fadeOut(transitionSpeed, function () {
      $(this).html(titleText);
      $(this).fadeIn(transitionSpeed);
      subtextA.fadeOut(transitionSpeed, function () {
        $(this).html(subtextAText);
        $(this).fadeIn(transitionSpeed);
        subtextB.fadeOut(transitionSpeed, function () {
          $(this).html(subtextBText);
          $(this).fadeIn(transitionSpeed);
        });
      });
    });
  }

  /**
   * start playing the showcase
   */
  this.play = function () {
    showFirstItem();
    setInterval(function () {
      showNextItem();
    }, intervalSpeed);
  };
}

/**
 * create a new ShowcaseSet
 * @param set {jQuery Element} a ShowcaseSet jQuery element
 */
function ShowcaseSet(set) {
  const title    = set.children(".showcase-title").html();
  const subtextA = set.children(".showcase-subtext-a").html();
  const subtextB = set.children(".showcase-subtext-b").html();

  /**
   * get the title text of the set
   * @return {string} the title text
   */
  this.getTitle = function () {
    return title;
  };

  /**
   * get the first subtext of the set
   * @return {string} the subtext
   */
  this.getSubtextA = function () {
    return subtextA;
  };

  /**
   * get the second subtext of the set
   * @return {string} the subtext
   */
  this.getSubtextB = function () {
    return subtextB;
  };
}
