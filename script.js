$(document).ready(function() {
  // prompt to click on character's picture
  $(".tip").tooltip({
    title: "Click to read more!",
    delay: { show: 0, hide: 0 }
  });
  // show description for each character
  $(".showDesc").click(function() {
    var article = $(this).data("show");
    var tabCharacters = $(".characterDesc");
    for (var i = 0; i < tabCharacters.length; i++) {
      if ($(tabCharacters[i]).is(":visible")) {
        $(tabCharacters[i]).hide(1000);
      }
    }
    if ($(article).is(":hidden")) {
      $(article).show(1000);
    }
  });
});
