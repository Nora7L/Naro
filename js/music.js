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