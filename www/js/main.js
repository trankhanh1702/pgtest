var menuHandler = function() {
	var sliderTarget = $("#left-menu");
	if(sliderTarget.data("clickState") != 1) {
		sliderTarget.data("clickState", 1).
			removeClass('collapse').
			addClass("custom-slider").find('ul');
		$(this).parent().parent().parent().animate({
			left: "+=" + sliderTarget.css("width")
		});
	} else {
		$(this).parent().parent().parent().animate({
			left: "-=" + sliderTarget.css("width")
		}, function() {
			sliderTarget.data("clickState", 0).
				addClass('collapse').
				removeClass("custom-slider");
		});
	};
}

$("#home-slider").click(menuHandler)

// Callback function references the event target and adds the 'swipeleft' class to it
function swiperightHandler(event){

	event.preventDefault();
	var sliderTarget = $("#left-menu");

	if(sliderTarget.data("clickState") != 1) {

		var sliderTarget = $("#left-menu");
		sliderTarget.data("clickState", 1).
			removeClass('collapse').
			addClass("custom-slider").find('ul');

		$(this).animate({
			left: "+=" + sliderTarget.css("width")
		});
	}
}

function swipeleftHandler(event){
	event.preventDefault();
	var sliderTarget = $("#left-menu");
	if(sliderTarget.data("clickState") == 1) {
		var sliderTarget = $("#left-menu");
		$(this).animate({
				left: "-=" + sliderTarget.css("width")
			}, function() {
				sliderTarget.data("clickState", 0).
					addClass('collapse').
					removeClass("custom-slider");
		});
	}
}

// Bind the swipeleftHandler callback function to the swipe event on div.box
$( ".container" ).on("swipeleft", swipeleftHandler).on("swiperight", swiperightHandler);
