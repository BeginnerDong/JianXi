
$(function(){
	var w=$(window).width();
	$('.nav li').hover(function(){
		$(this).removeClass('on');
		if(w<768){
			$(this).find('dl').stop(true,true).slideUp(500).css('display','block');
		}else{
			$(this).find('dl').stop(true,true).slideDown(500);
			$(this).find('i').stop().css('height',2).animate({left:0,width:"100%"},200);
		}	
	},function(){
		$(this).find('dl').stop(true,true).slideUp(500);
		$(this).find('i').stop().animate({left:'50%',width:0},200);	
	})
});


$(document).ready(function(){
     $('.wxSmallMore').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated2')) {
        
            $('.wx_icon').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('wx_icon1  animated2');
                }, k * 200, 'easeInOutExpo');

            });
          
        }
    }, {
        offset: '800px'

    }); 
     $('.wx_process').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated2')) {
        
            $('.process_item').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInLeft  animated2');
                }, k * 200, 'easeInOutExpo');

            });
          
        }
    }, {
        offset: '600px'

    });

      $('.made_develop').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {
    
            $('.made_left1').addClass('fadeInLeft animated');
            $('.made_right1').addClass('fadeInRight animated');
        }
    }, {
        offset: '400px'

    });

    $('.made_develop1').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {
            $('.made_left2').addClass('fadeInLeft animated');
            $('.made_right2').addClass('fadeInRight animated');
        }
    }, {
        offset: '400px'

    });
});


	