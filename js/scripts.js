

	/*Fancybox*/


            var forms = $('.form-modal'),
            cb_input = forms.find('input[type=text], input[type=email], input[type=tel] , textarea'),
            cr_close = $.fancybox.close();

    $("#fancybox-overlay").fancybox({
        padding: [0, 0, 0, 0],
        margin: [120, 0, 0, 0],
        scrolling: 'visible',
        minWidth: 435,
        minHeight: 424,
        autoSize: false,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 435,
        maxHeight: 424,
        fixed: false,
        autoCenter: false,
        closeBtn: true,
        afterClose: function () {
            cb_input.val('');
        }
    });

    $('.btr').click(function () {
        $.fancybox.close();
    });
	

/*Fancybox end*/  

	
		
		//   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");
          
           $("a[href$='.jpg'], a[href$='.png']").each(function() {
      $(this).addClass("fancybox");
       $(this).attr('rel', 'gallery');
     
});

 $(".fancybox").fancybox({
        padding: [0, 0, 0, 0],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
         background:'white',
        maxWidth: 800,
		arrows: true,
        fixed: false,
        autoCenter: false,
     
    });
	
	$(function () {
      $(".rslides").responsiveSlides({
		manualControls: '#slider-pager',  
        speed: 800,
		timeout: 8000,
		nav:true,
		
});
});
/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#989898" });

var resizeDiv = {
	divH: 0,
	divW: 0,
	init: function(){
		this.divW = $('#our-advantages .container .row, .categories-box ').width();
		this.divH = $('#our-advantages .container .row, .categories-box ').height(); 
		$(window).on('resize', this.callResize);
		this.callResize();
		
	},
	callResize: function(){
		var w,h;
		w = $("#our-advantages .container .row, .categories-box ").width();
		h = $("#our-advantages .container .row, .categories-box ").height();	
		 if (w != resizeDiv.divW || h != resizeDiv.divH) {
        /*what ever*/
        resizeDiv.divH = h;
        resizeDiv.divW = w;
		
    }
	$('#our-advantages .container .row, .categories-box').find('.col-xs-6.left, #categories-total').css({'height': resizeDiv.divH +'px'});	
	}
	
	
}		
resizeDiv.init();		
 });
 
 /* F.A.Q. */

$(document).ready(function(){
	dynamicFaq();
});

function dynamicFaq(){
	$('dd').hide();
	$('dt').bind('click', function(){
		$(this).toggleClass('open').next().slideToggle();;
	});
}

//  $(".categories-box").height(function(i,val){  
//        $("#categories-total  ").height(val+33)
//      }); 
	  
(function($) {
  var cache = [];
  $.preLoadImages = function() {
    var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      cache.push(cacheImage);
    }
  }
})(jQuery)
 
jQuery.preLoadImages("images/ico-arrow-our-project-next-hover.png", "images/ico-arrow-our-project-prev-hover.png", "images/bg-caprion-hover.png");

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 800,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	

});	  

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 800,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});
