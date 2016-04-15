
$(document).ready(function(){
	$.ajax(
		"http://api.doughnuts.ga/doughnuts",
		{
			method: "GET",
			success: function (data, textstatus, jqXHR) {
				console.log("AJAX request successful!");
			}
		}
	);

	console.log("Just fired AJAX request!");
});