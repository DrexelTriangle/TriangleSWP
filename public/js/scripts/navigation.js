$(document).ready(function()
{	
	// Open navigation when hamburger icon is clicked
	$('.header-hamburger-icon').click(function(evt)
	{
		$(this).toggleClass('open');
		$('#nav-main').toggleClass('open');
		evt.stopImmediatePropagation();
	});
});

$(window).scroll(function()
{
	// :in-viewport requires jquery.viewport.js plugin in public/js/vendor
	// TODO: remove dependency and rewrite in native JS
	if (!$('#header-frontpage').is(":in-viewport"))
		$('#header-global').removeClass('hidden');
	
	if ($('#header-frontpage').is(":in-viewport"))
	{
		if($('.header-hamburger-icon').hasClass('open'))
		{
			$('#nav-main').removeClass('open');
			$('.header-hamburger-icon').removeClass('open');
		}
		$('#header-global').addClass('hidden');
	}
});