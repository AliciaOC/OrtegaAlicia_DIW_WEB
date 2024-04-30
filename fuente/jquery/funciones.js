$(document).ready(function () {
    $("#hamburguesa-navbar").click(function () {
      $(this).toggleClass("active");
      $("#navbar").toggleClass("active");
    });
});
