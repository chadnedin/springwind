$(document).ready(function() {
	$("#email").focus();
	
	$("#email_form").validate({
		rules: {
			email_1: {
				required: true,
				email: true
			},
			email_2: {
				required: true,
				email: true,
				equalTo: "#email_1"
			},
			first_name: {
				required: true
			},
			last_name: {
				required: true
			}
			
		},
		messages: {
			email_2: {
				equalTo: "This entry must equal previous entry."
			}
		}
	}); // end validate
}); // end ready
