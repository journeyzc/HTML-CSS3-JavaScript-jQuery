$(function(){
	//alert(123);
	img(11)//参数从1《=arg 《=11;
	function img(imgL){
		var imgHtml=''
		for(var i=0;i<imgL;i++){
			imgHtml+='<img src="img/'+(i+1)+'.jpg" />'
		}
		$('#banner').append(imgHtml);

		var $img=$('#banner img');

		var mIndex=Math.floor(imgL/2);
		var mLeft=($(window).width()-$img.width())/2;
		
		$img.each(function(i){
			if(i<mIndex){
				$(this).attr('class' , 'left');
			}else if(i==mIndex){
				$(this).attr('class' , 'now');
			}else{
				$(this).attr('class' , 'right');
			}
			$(this).css('left',mLeft-(mIndex-i)*100+'px');
		});

		$(window).resize(function(){
			mLeft=($(window).width()-$img.width())/2;
			$img.each(function(i){
				$(this).css('left',mLeft-(mIndex-i)*100+'px');
			});
		})

		$img.click(function(){
			
			var nIndex=$(this).index();
			
			$img.each(function(i){
				
				$(this).css('left' , parseInt($(this).css('left'))-100*(nIndex-mIndex)+'px');
				if(i<nIndex){
					$(this).attr('class' , 'left');
				}else if(i==nIndex){
					$(this).attr('class' , 'now');
				}else{
					$(this).attr('class' , 'right');
				}
			});
			mIndex=nIndex;
		});
	}
})