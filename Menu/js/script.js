$(function () {
	$('.link1_1').mouseover(function () {
		$('.submenu').addClass('.link1_1');
		$('.submenu').fadeIn();
		$('.link1_1').hover(function () {
			$('.submenu').show();
		},
			function () {
				$('.submenu').removeClass('.link1_1');
				$('.submenu').fadeOut();
			});
	});
	$('.link2_1').mouseover(function () {
		$('.submenu2').addClass('.link2_1');
		$('.submenu2').fadeIn();
		$('.link2_1').hover(function () {
				$('.submenu2').show();
			},
			function () {
				$('.submenu2').removeClass('.link2_1');
				$('.submenu2').fadeOut();
			});
	});
	$('.link3_1').mouseover(function () {
		$('.submenu3').addClass('.link3_1');
		$('.submenu3').fadeIn();
		$('.link3_1').hover(function () {
				$('.submenu3').show();
			},
			function () {
				$('.submenu3').removeClass('.link3_1');
				$('.submenu3').fadeOut();
			});
	});
});
