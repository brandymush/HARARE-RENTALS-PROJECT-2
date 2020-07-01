

function myFunction(img) {
    // // Get the expanded image
    //  var expandImg = document.getElementById("expandedImg");
    // // Use the same src in the expanded image as the image being clicked on from the grid
    //  expandImg.src = imgs.src;
    // Show the container element (hidden with CSS)
    //  expandImg.parentElement.style.display = "block";
        // Get the expanded image
        var expandImg = document.getElementById("trending-img");
        // Use the same src in the expanded image as the image being clicked on from the grid
         expandImg.src = img.src;
        // Show the container element (hidden with CSS)
        // expandImg.parentElement.style.display = "block";
  }
 
 


  $('.currency-container').slideToggle();
  $(".dollar").click(function(){
      $(".currency-container").slideToggle();
    });
  
  

  