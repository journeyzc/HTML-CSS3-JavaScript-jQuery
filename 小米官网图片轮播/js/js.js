$(function(){
	var index=0;
	setIn();
	$('#banner .tab ul li').click(function(){
		
		//alert('123');
		index= $(this).index();//被点击的li的序列号
		//alert(index);
		play();
		
	});
	$('#banner .tab ul li').mouseover(function(){
		clearInterval(clearIn);
	});
	$('banner .tab ul li').mouseout(function(){
		setIn();
	});
	
	$('#right').click(function(){
		index ++;
		if(index>4){
			index=0;
		}
		play();
	});
	$('#left').click(function(){
		index --;
		if(index<0){
			index=4;
		}
		play();
	});
	$('#right').mouseover(function(){
		clearInterval(clearIn);
	});
	$('#right').mouseout(function(){
		setIn();
	});
	$('#left').mouseover(function(){
		clearInterval(clearIn);
	});
	$('#left').mouseout(function(){
		setIn();
	});

	function setIn(){
		clearIn=setInterval(function(){
			index ++;
			if(index>4){
				index=0;
			}
			play();
		},2000);
	}
	

	function play(){
		$('#banner .pic img').eq(index).fadeIn().siblings().fadeOut();
		$('#banner .tab ul li').eq(index).addClass('on').siblings().removeClass('on');
	}
});