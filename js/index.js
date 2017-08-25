/*loading*/
$(document).ready(function() {
	setTimeout(function() {
		$("#loading").fadeOut();
	}, 700);
});
/*分页*/
$(function(){
	var btnRindex=0;
	/*li点击事件*/
	$('.section-btn li').each(function(index) {
            $(this).click(function(){
                btnRindex=index;
                scroller();
            })
        });
	/*页面切换*/
	function scroller(){
            $('.section-btn li').eq(btnRindex).addClass('cur').siblings().removeClass('cur');    
            $('.section-wrap').attr("class","section-wrap").addClass(function() {
                    return "put-section-"+btnRindex;
             }).find('.section').eq(btnRindex).find('.title').addClass('active');
        };
    /*当前页面赋值*/
    function goUp(){
    	btnRindex++;
    	if (btnRindex==$('.section-btn li').length) {
    		btnRindex=$('.section-btn li').length-1;
    	}
    }
    function goDown(){
    	btnRindex--;
    	if (btnRindex<0) {
    		btnRindex=0;
    	}
    }
    /*键盘*/
    $(document).one('keydown',key);
    function key(ev){
        var e=ev||window.ev;
        var keyress=e.keyCode||e.which||e.charCode;
        switch(keyress)    {
                case 38: goDown();scroller();    
                break;
                case 40: goUp();scroller();    
                break;
            };
        setTimeout(function(){$(document).one('keydown',key)},1000)

    }
    /*鼠标*/
    $('.section-wrap').one('mousewheel',mouseOver);
    function mouseOver(ev){
        if (ev.deltaY<0) {goUp()}
        else(goDown())
        scroller();
        setTimeout(function(){$('.section-wrap').one('mousewheel',mouseOver)},1000)
    }
    /*翻页按钮*/
    $('.go-btn').one('click',btnGo);
        function btnGo(){
            goUp();scroller();    
            setTimeout(function(){$('.go-btn').one('click',btnGo)},1000)
        };

})
/*section-3*/
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

         $('.myskill ul li h4').mouseenter(function(ev){
         var index=$(this).parent().index();
         // console.log(index)
         $('.myskill-con .myskill-content')
         .eq(index+1)
         .addClass('skill-detail-block')
         .siblings().removeClass('skill-detail-block')
         
         
         })
	});
/*music*/
$(document).ready(function() {

	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];


	audio.addEventListener("ended", function(event) {
		music.className = "#1";
	}, false);

	music.onclick = function() {
		if(audio.paused) {
			audio.play();
			this.className = "music_anim";
		} else {
			audio.pause();
			this.className = "#1";
		}
	}
});

/*联系我*/

$(document).ready(function() {

var contact=document.getElementById("contact");
var contactUl=contact.getElementsByTagName("ul")[0];
var contactLi1=contactUl.getElementsByTagName('li')[0];
var contactLi2=contactUl.getElementsByTagName('li')[1];
var contactWeixin=document.getElementById("contact-weixin");
var contactQq=document.getElementById("contact-qq");
var contactTimer;
var contactTimer2;

  contactLi1.onmouseover=function(){
  	clearBlock();
  }
  contactLi1.onmouseout=function(){
    timeNone();
  }
  contactWeixin.onmouseover=function(){
  	clearBlock();
  }
  contactWeixin.onmouseout=function(){
  	timeNone();
  }

  function clearBlock(){
     clearTimeout(contactTimer);
     contactWeixin.style.display="block";
  }
  function timeNone(){
  	contactTimer=setTimeout(function(){
    	 contactWeixin.style.display="none";
    },50);
  }
  
  contactLi2.onmouseover=function(){
  	clearBlockq();
  }
  contactLi2.onmouseout=function(){
    timeNoneq();
  }
  contactQq.onmouseover=function(){
  	clearBlockq();
  }
  contactQq.onmouseout=function(){
  	timeNoneq();
  }

  function clearBlockq(){
     clearTimeout(contactTimer2);
     contactQq.style.display="block";
  }
  function timeNoneq(){
  	contactTimer2=setTimeout(function(){
    	 contactQq.style.display="none";
    },50);
  }


});

/*pdf*/
$(document).ready(function(){
  var x=15,y=15;
  $('#contact ul li a').mouseenter(function(ev){
    this.myTitle=this.title;
    this.title='';
    var $pdf=$('<div id="pdf">'+this.myTitle+'</div>');
    $('body').append($pdf);
    $('#pdf').css({
          'display':'block',
          'left':ev.pageX+x+"px",
          'top':ev.pageY+y+"px"
         })
    })
  .mousemove(function(ev){
            $('#pdf').css({
          'left':ev.pageX+x+"px",
          'top':ev.pageY+y+"px"
          })
         })
  .mouseleave(function(){
      $('#pdf').remove();
      this.title=this.myTitle;
    })
 })
/*第四版*/
$(function(){
  var index=$('.item-content-itemA').parent().index();
    $('.item-content-itemA').mouseenter(function(){
       $(this).find("span").eq(index).slideDown().parent().prev().find('div').show();
    })
    $('.item-content-itemA').mouseleave(function(){
       $(this).find("span").eq(index).slideUp().parent().prev().find('div').hide(); 
    })
})
