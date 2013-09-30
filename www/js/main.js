var wrapper = document.getElementById("wrapper"),
	$wrapper = $("wrapper"),
	coorXStart = 0,
	moveStatus = 0,
	coorX = 0,
	canSwipeLeft = true,
	wrapperY;
	content = document.getElementById("content");
var menuHandler = function(event) {
	event.preventDefault();
	var sliderTarget = $("#left-menu");
	// sliderTarget = document.getElementById("#left-menu")
	if(canSwipeLeft) {
		sliderTarget.removeClass('collapse').
			addClass("custom-slider").find('ul');
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
	var sliderTarget = $("#left-menu");
	if(parseInt($("#wrapper").css("left")) < parseInt(sliderTarget.css("width"))/2) {
		$("#wrapper").css("left", 'auto');
		canSwipeLeft = true;
	} else {
		$("#wrapper").css("left", sliderTarget.css("width"));
		canSwipeLeft = false;
	}
});

content.addEventListener('touchmove', function(event) {
		event.preventDefault();
		var finetuneMove = window.setInterval(function() {
			
		}, 50);
		var sliderTarget = document.getElementById("left-menu");

		distance = event.touches[0].pageX - coorXStart;
		if(canSwipeLeft && (distance > 0)) {
			// $("#test").html(distance);
			document.getElementById("test").innerHTML = distance;
			sliderTarget.className = 'navbar-collapse custom-slider';
			document.getElementById("wrapper").style.left = distance + "px";
		} else if(!canSwipeLeft && (distance < 0)) {
			$("#test").html($wrapper.css("left"));
			$("#wrapper").css("left", wrapperY + distance + "px");
		}
});

content.addEventListener('touchstart', function(event) {
		// initialize X coordinate
		coorXStart = event.touches[0].pageX;
		wrapperY = parseInt($("#wrapper").css('left'));

});

