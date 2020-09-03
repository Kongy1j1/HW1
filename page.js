$(document).ready(function() { // do this when the document is loaded
	$("#dialer_space").show(); // show the element with ID "element"
	$("#contact_list_space").hide(); // hide the element with ID "otherElement"
	$("#add_contact_space").hide();
});

$("#dialer").click(function() {
  $("#dial_space").show();
	$("#contact_list_space").hide();
	$("#add_contact_space").hide();
});

$("#contact").click(function() {
  $("#contact_list_space").show();
  $("#dial_space").hide();
	$("#add_contact_space").hide();
});

$("#addContact").click(function() {
  $("#add_contact_space").show();
  $("#dial_space").hide();
	$("#contact_list_space").hide(); 

});
