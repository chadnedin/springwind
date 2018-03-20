$(document).ready(function() {
	
	// runs when an h2 heading is clicked
    $("#abouts h2").click(function() {
		$(this).toggleClass("minus");
		if ($(this).attr("class") != "minus") {
	        $(this).next().slideUp(2000, "easeInSine");
	   	}
	   	else {
		    $(this).next().slideDown(1500, "easeOutSine");
	   	}
		event.preventDefault();
		event.stopPropagation();
    }); // end click
	
	// runs when the page is ready
	$("#abouts h2").animate( { fontSize: "250%", opacity: 1, left: "+=375" }, 2000, "easeInSine" )  
		         .animate( { fontSize: "175%", left: "-=200" }, 1500, "easeOutSine" );
		    
	// runs when the top-level heading is clicked
	$("#abouts h2").click(function() {
		$(this).animate( { fontSize: "250%", opacity: 1, left: "+=375" }, 2000, "easeInSine" )  
			   .animate( { fontSize: "175%", left: 0 }, 1500, "easeOutSine" );
			   event.preventDefault();
			   event.stopPropagation();
	}); // end click
	
}); // end ready