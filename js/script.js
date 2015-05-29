$(document).ready(function() {

	/* CHANGING BACKGROUNDS */
	// var _default = "purple";
	var green = "#88ae60";
	var pattern = "#fac564";

	$(".reset").click(function() {
		$("body").css({"background-image":"none", "background-color":"#fff"});
	})

	$("#green").click(function() {
		$("body").css({"background-image":"none", "background-color":green});
		// changeColor(green);
	})

	$("#pattern").click(function() {
		$("body").css({"background-image":"url('img/food.png')", "background-color":pattern});
		// changeTextColor(pattern);
	})

	$("#triangles").click(function() {
		$("body").css({"background-image":"none", "background-color":"#fff"});
		// changeTextColor(triangles);
	})

	// function changeTextColor(color) {
	// 	$("#main-header").css("color", color);
	// 	$(".button").css("color", color);
	// })

	// $('div#someDiv span').filter(function() {
	//     var match = 'rgb(0, 0, 0)';
	//     return ($(this).css('background-color') == match);
	// }).css('background-color', currColor);

});