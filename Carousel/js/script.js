$(function () {
	$('.jcarousel').jcarousel({
		items: '.jcarousel-item'
	});
	$('.jcarousel-prev').jcarouselControl({target:'-=1'});
	$('.jcarousel-next').jcarouselControl({target:'+=1'});
	$('.left_arrow').jcarouselControl({target:'-=1'});
	$('.right_arrow').jcarouselControl({target:'+=1'});
});

$(function () {
	$('.jcarousel').jcarousel({
		list: '.jcarousel-list'
	});
	$('.jcarousel-prev').jcarouselControl({traget:'-=1'});
	$('.jcarousel-next').jcarouselControl({traget:'-=1'});
	$('.left_arrow').jcarouselControl({target:'-=1'});
	$('.right_arrow').jcarouselControl({target:'+=1'});
});

$('select').selctbox();
$(function () {
	$('.container').click(function () {
		$('.div_for_checkbox').toggleClass('active');
	});
});
