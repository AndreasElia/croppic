$(document).ready(function () {
	var optionsFloating = $('#optionsFloating'),
		defaultOptionsTop = optionsFloating.offset().top,
		defaultOptionsBottom = $('#downloadTarget').offset().top - $(window).height(),
		defaultOptionsWidth = optionsFloating.width();

	$(window).scroll(function () {
		if ($(window).scrollTop() > defaultOptionsTop - 100 && $(window).scrollTop() < defaultOptionsBottom) {
			optionsFloating.addClass('fixed');
			optionsFloating.width(defaultOptionsWidth)
		} else {
			optionsFloating.removeClass('fixed');
		}
	});

	$('.scrollToLink').on('click',function () {
		var divId = $(this).attr('data-scroll');
		var scrollTop = $('#' + divId).offset().top - 10;

		$('html, body').animate({
			scrollTop: scrollTop + 'px'
		});
	});
});
