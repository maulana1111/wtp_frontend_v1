// script.js
$(document).ready(function () {
  $(".collapseSidebar").on("click", function () {
    if ($(".txt-logo").hasClass("d-none")) {
      $(".txt-logo").removeClass("d-none");
    } else {
      $(".txt-logo").addClass("d-none");
    }
  });
});
