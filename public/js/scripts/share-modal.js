$(document).ready(function()
{
	$('#share-more').click(function(evt)
	{
		$('.share-modal').toggleClass('open');
		evt.stopImmediatePropagation();
	});
});