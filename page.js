$(document).ready(function() { // do this when the document is loaded
	$("#dialer_space").show(); // show the element with ID "element"
	$("#contact_list_space").hide(); // hide the element with ID "otherElement"
	$("#add_contact_space").hide();
});

$("#dialer").click(function() { // when "button_id" is clicked
  $("#dial_space").show(); // show the element with ID "element"
	$("#contact_list_space").hide(); // hide the element with ID "otherElement"
	$("#add_contact_space").hide();
});

$("#contact").click(function() { // when "button_id" is clicked
  $("#contact_list_space").show();
  $("#dial_space").hide(); // show the element with ID "element"
	 // hide the element with ID "otherElement"
	$("#add_contact_space").hide();
});

$("#addContact").click(function() { // when "button_id" is clicked
  $("#add_contact_space").show();
  $("#dial_space").hide(); // show the element with ID "element"
	$("#contact_list_space").hide(); // hide the element with ID "otherElement"

});
