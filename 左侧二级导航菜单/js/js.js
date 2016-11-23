$(function(){
	$('#nav ul li').click(function(){
		$(this).find('.hover').slideToggle('slow');
	
		if($(this).hasClass('curr')){
			$(this).removeClass('curr');
		}else{
			$(this).addClass('curr');
		}
		$(this).siblings().removeClass('curr').find('.hover').slideUp('slow');
	});
	$('#nav ul li .hover').click(function(e){
		e.stopPropagation();
	});
});