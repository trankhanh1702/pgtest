var wrapper = document.getElementById("wrapper"),
	coorXStart = 0,
	timeStart, timeCurrent, lastDrawTime,
	distanceFirstPlace = 0,
	is_moving = false;
	drawTimeout = 100,
	canSwipeLeft = true,
	content = document.getElementById("content");
var menuHandler = function(event) {
	event.preventDefault();
	var sliderTarget = $("#left-menu");
	// sliderTarget = document.getElementById("#left-menu")
	if(canSwipeLeft) {
		sliderTarget.addClass("custom-slider").find('ul');
		$(this).parent().parent().parent().animate({
			left: "+=" + sliderTarget.css("width")
		}, 300, "linear");

		// disable swipe left
		canSwipeLeft = false;
	} else {
		$(this).parent().parent().parent().animate({
			left: "-=" + sliderTarget.css("width")
		}, 300, "linear", function() {
			sliderTarget.addClass('collapse').
				removeClass("custom-slider");

			// enable swipe left
			canSwipeLeft = true;
		});
	};
}

document.getElementById("home-slider").addEventListener('touchend', menuHandler, false);


content.addEventListener('touchend', function(event) {
	is_moving = false;
	var sliderTarget = $("#left-menu");
	if(parseInt($("#wrapper").css("left")) < parseInt(sliderTarget.css("width"))/2) {
		$("#wrapper").css("left", 'auto');
		canSwipeLeft = true;
	} else if($("#wrapper").css("left") != "auto") {
		$("#wrapper").css("left", sliderTarget.css("width"));
		canSwipeLeft = false;
	}
});

content.addEventListener('touchmove', function(event) {
		var sliderTarget = $("#left-menu");

			distanceFirstPlace = is_moving? distanceFirstPlace : event.touches[0].pageX - coorXStart;
			distance = event.touches[0].pageX - coorXStart - distanceFirstPlace;
			// alert(distance)
		event.preventDefault();

		timeCurrent = (new Date()).getTime();

		if(timeCurrent - timeStart < 200) {
			var tmpTimeDiff = timeCurrent - timeStart;
		} else {
			var tmpTimeDiff = timeCurrent - timeStart;
		}

		if(canSwipeLeft && (distance > 0)) {
			sliderTarget.addClass("custom-slider");
			if(distance < parseInt(sliderTarget.css("width"))) { // distance within threshold
				if(is_moving) {
					$("#wrapper").css("left", distance + "px");
				}
			} else { // distance exceeds threshold
				$("#wrapper").css("left", sliderTarget.css("width"));
			}

		} else if(!canSwipeLeft && (distance < 0)) {
			if(distance + parseInt(sliderTarget.css("width")) > 0) {
				$("#wrapper").css("left", parseInt(sliderTarget.css("width")) + distance + "px");
			} else {
				$("#wrapper").css("left", "0px");
			}
		}
		// set moving status
		is_moving = true;
});

content.addEventListener('touchstart', function(event) {
		// initialize X coordinate
		coorXStart = event.touches[0].pageX;
		
		// save the initial time
		timeStart = (new Date()).getTime();

});

