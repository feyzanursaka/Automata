$(document).ready(function(){
	$('.down').click(function(e){
		var linkHref = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(linkHref).offset().top
			}, 1000);
	});
});