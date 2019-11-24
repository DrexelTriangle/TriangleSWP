$(document).ready(function()
{
	// Global search - Open and focus search box when search icon is clicked
	$('#header-search-icon').click(function(evt)
	{
		if($('#searchbox-main').width() > 0)
		{
			$('#searchbox-main').removeClass('open');
			
			if($(window).width() < 975)
				$('#logo-mobile').fadeIn(400);
		}
		else
		{
			$('#searchbox-main').addClass('open');
			$('#searchbox-main').focus();

			if($(window).width() < 975)
				$('#logo-mobile').fadeOut();
		}

		evt.stopImmediatePropagation();
	});
	
	// Global search - Close search box when the user clicks out of focus
	$('#searchbox-main').focusout(function(evt)
	{
		$('#searchbox-main').removeClass('open');
		
		if($(window).width() < 975)
				$('#logo-mobile').fadeIn(800);
		
		evt.stopImmediatePropagation();
	});
	
	// Frontpage search - Open and focus search box when search icon is clicked
	$('#search-icon-frontpage').click(function(evt)
	{
		if($('#searchbox-frontpage').width() > 0)
		{
			$('#searchbox-frontpage').removeClass('open');
		}
		else
		{
			$('#searchbox-frontpage').addClass('open');
			$('#searchbox-frontpage').focus();
		}
			
		evt.stopImmediatePropagation();
	});
	
	// Frontpage search - Close search box when the user clicks out of focus
	$('#searchbox-frontpage').focusout(function(evt)
	{
		$('#searchbox-frontpage').removeClass('open');
		evt.stopImmediatePropagation();
	});
});