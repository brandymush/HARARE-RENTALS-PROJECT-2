

function myFunction(img,id) {
       // card1
        var expandImg = $('#'+id);
         expandImg.src = img.src;
}
$(document).ready(function() {
  $("#formButton").click(function() {
    $("#form1").toggle();
  });
});



  $(".dollar").click(function(){
      $(".currency-container").slideToggle();
    });
  
  $(".btn").click(function() {
  $(".myText").toggle();  
});