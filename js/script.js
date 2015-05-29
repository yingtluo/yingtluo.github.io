$(document).ready(function() {

	/* CHANGING BACKGROUNDS */
	// var _default = "purple";
	var green = "#88ae60";
	var pattern = "#fac564";

	// $(".reset").click(function() {
	// 	$("body").css({"background-image":"none", "background-color":"#fff"});
	// })

	$("#green").click(function() {
		$("body").css({"background-image":"none", "background-color":green});
		$("#main-header").css("color", green);
		$(".button").css("color", green);
		$(".link").css("color", green);
		// changeTextColor(green);
	})

	$("#pattern").click(function() {
		$("body").css({"background-image":"url('img/food.png')", "background-color":pattern});
		$("#main-header").css("color", pattern);
		$(".button").css("color", pattern);
		$(".link").css("color", pattern);
		// changeTextColor(pattern);
	})

	$("#triangles").click(function() {
		$("body").css({"background-image":"none", "background-color":"#fff"});
		$("#main-header").css("color", "black");
		$(".button").css("color", "black");
		$(".link").css("color", "black");
		// changeTextColor(triangles);
	})

	// function changeTextColor(color) {
	// 	$("#main-header").css("color", color);
	// 	$(".button").css("color", color);
	//	$("a").css("color", color);
	// })
});