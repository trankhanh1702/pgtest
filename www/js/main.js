$("#home-slider").click(function() {
		
	$("#home-slider-target").removeClass('collapse').addClass("custom-slider");
		$(this).parent().parent().parent().animate({
		left: "+=250px"
	});
})