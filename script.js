$(document).ready(function () {
  $("#hideBtn").click(function () {
    $("#box").hide();
  });

  $("#showBtn").click(function () {
    $("#box").show();
  });

  $("#box").click(function () {
    $(this).toggleClass("highlight");
  });
});
