$(document).ready(function(){
	$('.section-3').scrollTop(function(){
		$('.HaC').animate({
		width:'100%'
	    },6000);
	    $('.JaJ').animate({
		width:'80%'
	    },6000)
	    $('.KaJ').animate({
		width:'60%'
	    },6000)
	    $('.PS').animate({
		width:'50%'
	    },6000)
	    $('.HD').animate({
		width:'30%'
	    },6000)
	
	})
	
});
$(document).ready(function(){
		var y=100;
		//弹出窗口
         // window.open('1.html','','width=200,height=800')
         $('.myskill ul li ').mouseenter(function(ev){
         var index=$(this).index();
         // console.log(index)
         $('.myskill-con .myskill-content')
         .eq(index)
         .addClass('skill-detail-block')
         .css('top',index*50+y+"px")
         .siblings().removeClass('skill-detail-block')
         
         
         })
	});