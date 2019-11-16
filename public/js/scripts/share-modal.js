$(document).ready(function()
{
	$('#share-more').click(function(evt)
	{
		$('.share-modal').toggleClass('open');
		evt.stopImmediatePropagation();
	});	

	$('body').on('click',function(event)
	{
		if($('.share-modal').hasClass('open'))
		{
			$('.share-modal').toggleClass('open');
		}
	}); 
});