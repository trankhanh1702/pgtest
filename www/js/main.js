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
	};

	$(function(){
	  // Bind the swipeleftHandler callback function to the swipe event on div.box
	  $( ".container" ).on( "swipeleft", swipeleftHandler );
	 
	  // Callback function references the event target and adds the 'swipeleft' class to it
	  function swipeleftHandler( event ){
	  	alert("")
	    // $( event.target ).addClass( "swipeleft" );
	  }
	});
})