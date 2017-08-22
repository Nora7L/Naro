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