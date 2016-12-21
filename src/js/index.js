function resizeBackgroundHome() {
	var e = 1279, t = 942, a = e / t;
	if (amplada / alcada > a)var i = amplada, s = amplada / a; else var s = alcada, i = alcada * a;
	$(".scene li.colors").css({
		width: i - 40 + "px",
		height: s - 40 + "px",
		marginTop: -((s - 20) / 2) + "px",
		marginLeft: -((i - 20) / 2) + "px"
	})
}

var alcada = $(window).height() - 40, amplada = $(window).width() - 40, lastAnimation = 0, animationTime = 1200, quietPeriod = 100, temps1 = 600, temps2 = 600, easingType = "easeInOutCubic", easingType2 = "easeInOutCubic";
