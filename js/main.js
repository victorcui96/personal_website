$(document).ready(function() {

	var time = document.getElementById("time");
	var today = new Date();
	var currHour = today.getHours();
	var currMin = today.getMinutes();
	var unc = $("#UNC_2018");
	if (currHour === 6 && currMin >= 30) {
		time.textContent = "Good morning.";
		changeColor(time, "blanchedalmond");
	}
	else if (currHour >= 7 && (currHour <= 11)) {
		time.textContent = "Good morning.";
		changeColor(time, "yellow");
	}
	else if (currHour >= 12 && currHour <= 16) {
		time.textContent = "Good afternoon.";
		changeColor(time, "darkorange");
	}
	else if (currHour >= 17 && currHour <= 20) {
		time.textContent = "Good evening.";	
		changeColor(time, "mediumblue");
	}
	else if (currHour >= 21 || currHour === 0) {
		time.textContent = "Good night.";	
		changeColor(time, "midnightblue");
		unc.removeClass('neg_spacing');
	}
	else {
		time.textContent = "Hello night owl.";	
		changeColor(time, "mistyrose");
		
	}

	function changeColor(el, newColor) {
		el.style.color = newColor;
	}
	

});

