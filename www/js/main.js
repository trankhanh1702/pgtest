var menuHandler = function() {
	var sliderTarget = $("#left-menu");
	if(sliderTarget.data("clickState") != 1) {
		sliderTarget.data("clickState", 1).
			removeClass('collapse').
			addClass("custom-slider").find('ul');
		$(this).parent().parent().parent().animate({
			left: "+=" + sliderTarget.css("width")
		}, 150, "linear");
	} else {
		$(this).parent().parent().parent().animate({
			left: "-=" + sliderTarget.css("width")
		}, 150, "linear", function() {
			sliderTarget.data("clickState", 0).
				addClass('collapse').
				removeClass("custom-slider");
		});
	};
}

$("#home-slider").click(menuHandler)



var wrapper = document.getElementById("wrapper");


wrapper.addEventListener('touchend', function() {
        document.getElementById("test").innerHTML = "<p>Ended</p>";
	//ctx.clearRect(0, 0, w, h);
});

wrapper.addEventListener('touchmove', function(event) {
  event.preventDefault();
   document.getElementById("test").innerHTML = "<p>Moving</p>";
});

wrapper.addEventListener('touchstart', function(event) {

document.getElementById("test").innerHTML = "<p>Starting</p>";

});


