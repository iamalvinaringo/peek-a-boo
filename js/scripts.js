$(document).ready(function (){
  $(".clickable").click(function(){
    $("img").show();
    $("#initially-hidden").slideToggle();
    $("#initially-showing").slideToggle();
  });
});
