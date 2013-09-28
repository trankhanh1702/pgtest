$("#home-slider").click(function() {
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
	}
})