$(document).ready(function() {
            $('#button-1').click(function() {   //set up the button to animate the color of selected text
               $('#animTarget').animate({
                  backgroundColor: "#00140A",
                  color: "white"
               })
            }) //end click
         });  //end function
